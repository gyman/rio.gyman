$ ->     
  $entranceModal = $("#editEntranceModal")
  
  # event na liście
  
  $(document).off("click.openAddEntranceModal").on "click.openAddEntranceModal",".addEntrance", (e) ->
    e.stopPropagation()
    e.preventDefault()
    container = $(".modal-body",$entranceModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      container.html response
      $entranceModal.modal
        "show" : true
  
  $entranceModal.on "shown", () ->
    $("input#dende_entriesbundle_entry_entryDate").datetimepicker
      dateFormat: "dd.mm.yy"
  
  # event w modalu

  $(document).off("click.addEntrance").on "click.addEntrance","a#addEntrance", (e) ->
    e.preventDefault()
    
    $form = $("form#entranceForm",$entranceModal)
    container = $(".modal-body",$entranceModal)
    action = $form.attr "action"
    data = $form.serialize()
    
    $(".modal-footer",$entranceModal).block()
      
    $.ajax
      url: action
      data: data
      success: (response) ->
        container.html response
        $entranceModal.modal "hide"
        datatable.fnReloadAjax()
      error: (xhr, textStatus, errorThrown) ->
        if xhr.status == 400
          container.html xhr.responseText
      complete: (msg) ->
        $(".modal-footer",$entranceModal).unblock()
      type: $form.attr "method"