$ ->      
  $("#membersList").dataTable()
    
  $memberModal = $("#editMemberModal")
  $entranceModal = $("#editEntranceModal")
  $voucherModal = $("#newVoucherModal")
  
  $(document).on "click","a.createNewMember", (e) ->
    e.preventDefault()
    container = $(".modal-body",$memberModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      container.html response
      $memberModal.modal
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
  
  $(document).on "click","a.addEntrance", (e) ->
    e.preventDefault()
    container = $(".modal-body",$entranceModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      container.html response
      $entranceModal.modal
        "show" : true
        
  $(document).on "click","a.newVoucher", (e) ->
    e.preventDefault()
    $container = $(".modal-body",$voucherModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      $container.html response
      $voucherModal.modal
        "show" : true
        
#      $voucherModal.on "hidden", () ->
#        window.location.reload()        