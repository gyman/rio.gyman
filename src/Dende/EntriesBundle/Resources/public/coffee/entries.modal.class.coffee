window.setupEntriesModal = ->     
  $entranceModal = $("#editEntranceModal")

  setupClickEvent = (e, href) ->
    e.stopPropagation()
    e.preventDefault()
    container = $(".modal-body",$entranceModal)
    $.get href, (response) ->
      container.html response
      $entranceModal.modal
        "show" : true
  
  # event na liście
  
  $(document).off("click.openAddEntranceModal.button").on "click.openAddEntranceModal.button",".addEntrance", (e) ->
    console.log "button"
    href = $(this).attr "href"
    setupClickEvent(e,href)
    
  $(document).off("click.openAddEntranceModal.keytype").on "click.openAddEntranceModal.keytype", (e,href) ->
    console.log "keytype"
    setupClickEvent(e,href)
    
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