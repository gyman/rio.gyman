$ ->      
  #all thing on load
  
  $("#membersList").dataTable()
    
  $memberModal = $("#editMemberModal")
  $voucherModal = $("#newVoucherModal")
  $entranceModal = $("#editEntranceModal")
  
  $(document).on "click","a.newVoucher", (e) ->
    e.preventDefault()
    $container = $(".modal-body",$voucherModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      $container.html response
      $voucherModal.modal
        "show" : true
        
      $voucherModal.on "hidden", () ->
        window.location.reload()
    
  $(document).on "click","a.createNewMember", (e) ->
    e.preventDefault()
    container = $(".modal-body",$memberModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      container.html response
      $memberModal.modal
        "show" : true
    
  $(document).on "click","a.addEntrance", (e) ->
    e.preventDefault()
    container = $(".modal-body",$entranceModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      container.html response
      $entranceModal.modal
        "show" : true

  $(document).on "click","a.editMember", (e) ->
    e.preventDefault()
    $container = $(".modal-body",$memberModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      $container.html response
      $(".hideForNewMember").removeClass("hidden").show()
      $memberModal.modal
        "show" : true
  ###   
  $entranceModal.on "shown", () ->
    $("input#dende_entriesbundle_entry_entryDate").datetimepicker
      dateFormat: "dd.mm.yy"
  ###
  
  $(document).on "click","a#addEntrance", (e) ->
    e.preventDefault()
    $form = $("form#entranceForm",$entranceModal)
    container = $(".modal-body",$entranceModal)
    action = $form.attr "action"
    data = $form.serialize()
    $(".modal-footer",$entranceModal).block BLOCK_CONFIG
    $.ajax
      url: action
      data: data
      success: (response) ->
        container.html response
        $entranceModal.modal "hide"
        window.location.reload()
      error: (xhr, textStatus, errorThrown) ->
        if xhr.status == 400
          container.html xhr.responseText
      complete: (msg) ->
        $(".modal-footer",$entranceModal).unblock()
      type: $form.attr "method"