$ ->      
  BUTTON_SAVE_STATE = "Zapisz"
  BUTTON_SAVE_CLASS = "btn-primary"
  BUTTON_DELETE_STATE = "Usuń"
  BUTTON_DELETE_CLASS = "btn-danger"
  FOTO_UPLOAD_ERROR = "Błąd po stronie serwera! Spróbuj z innym plikiem graficznym"
         
  $("#membersList").dataTable()
    
  $memberModal = $("#editMemberModal")
  $voucherModal = $("#newVoucherModal")
    
  $deleteCheckbox = $("input#deleteUserCheckbox")
  
  $(document).on "click","a#newVoucher", (e) ->
    e.preventDefault()
    $container = $(".modal-body",$voucherModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      $container.html response
      $voucherModal.modal
        "show" : true
    
  $(document).on "click","a#createNewMember", (e) ->
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
      $memberModal.modal
        "show" : true

  $memberModal.on "hidden", () ->
    $deleteCheckbox.attr "checked",false
    $.uniform.update()
    $("#saveFormInModal").text BUTTON_SAVE_STATE
    $("#saveFormInModal").removeClass BUTTON_DELETE_CLASS
    $("#saveFormInModal").addClass BUTTON_SAVE_CLASS

  $memberModal.on "shown", () ->
    $("#dende_membersbundle_member_fotoUploader").fileupload
      limitMultiFileUploads: 1
      done: (e, data) ->
        response = data.response().result
        responseJSON = $.parseJSON(response)
        pathname = responseJSON.pathname
        filename = responseJSON.filename
        $("img#memberFoto").attr "src", pathname
        $("input#dende_membersbundle_member_foto").val filename
      fail: (e, data) ->
        alert FOTO_UPLOAD_ERROR
    $("#dende_membersbundle_member_birthdate").datepicker
      dateFormat: "dd.mm.yy"
          
  $voucherModal.on "shown", () ->
    $("#dende_vouchersbundle_voucher_startDate, #dende_vouchersbundle_voucher_endDate").datepicker
      dateFormat: "dd.mm.yy"
    $("#dende_vouchersbundle_voucher_groups").val([35,47,85]).select2
      dropdownAutoWidth : true
      containerCss : 
        width : "200px"
    $("#dende_vouchersbundle_voucher_price").spinner
      min: 0
      step: 10
      start: 1000
      numberFormat: "C"
    $("#dende_vouchersbundle_voucher_amount").spinner
      min: 0
      step: 1
      start: 1000
      numberFormat: "C"
      
  $(document).on "change", $deleteCheckbox, (e) ->
    e.preventDefault()
    if $deleteCheckbox.is ":checked"
      $("#saveFormInModal").text BUTTON_DELETE_STATE
      $("#saveFormInModal").removeClass BUTTON_SAVE_CLASS
      $("#saveFormInModal").addClass BUTTON_DELETE_CLASS
    else
      $("#saveFormInModal").text BUTTON_SAVE_STATE
      $("#saveFormInModal").removeClass BUTTON_DELETE_CLASS
      $("#saveFormInModal").addClass BUTTON_SAVE_CLASS
        
  $(document).on "click","#saveFormInModal", (e) ->
    e.preventDefault()
    $form = $("form#memberForm",$memberModal)
    if $deleteCheckbox.is ":checked"
      if confirm "Czy na pewno skasować użytkownika?"
        deleteAction = $form.attr "data-delete-action";
        $.get deleteAction, {}, (e) ->
          $memberModal.modal "hide"
          window.location.reload()
    else
      container = $(".modal-body",$memberModal)
      action = $form.attr "action"
      data = $form.serialize()
      $(".modal-footer",$memberModal).block
        message: '<img src="/bundles/layout/images/loaders/circular/072.gif" alt="loading"/>'
        css : 
          border: 'none', 
          backgroundColor:'transparent' 
        overlayCSS:
          backgroundColor: '#E8EAEB'  
      $.ajax
        url: action
        data: data
        success: (response) ->
          container.html response
          $memberModal.modal "hide"
          window.location.reload()
        error: (xhr, textStatus, errorThrown) ->
          if xhr.status == 400
            container.html xhr.responseText
        complete: (msg) ->
          $(".modal-footer",$memberModal).unblock()
        type: $form.attr "method"
