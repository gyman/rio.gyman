$ ->      
  BUTTON_SAVE_STATE = "Zapisz"
  BUTTON_SAVE_CLASS = "btn-primary"
  BUTTON_DELETE_STATE = "Usuń"
  BUTTON_DELETE_CLASS = "btn-danger"
  FOTO_UPLOAD_ERROR = "Błąd po stronie serwera! Spróbuj z innym plikiem graficznym"
         
  $("#membersList").dataTable()
    
  $memberModal = $("#editMemberModal")
  $voucherModal = $("#newVoucherModal")
  $entranceModal = $("#editEntranceModal")
    
  $deleteCheckbox = $("input#deleteUserCheckbox")
  
  $(document).on "click","a.newVoucher", (e) ->
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
    
  $(document).on "click","a.addEntrance", (e) ->
    e.preventDefault()
    container = $(".modal-body",$entranceModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      container.html response
      $entranceModal.modal
        "show" : true
        
  $(document).on "click","a#createNevVoucher", (e) ->
    e.preventDefault()
    $form = $("form#voucherForm",$voucherModal)
    container = $(".modal-body",$voucherModal)
    action = $form.attr "action"
    data = $form.serialize()
    $(".modal-footer",$voucherModal).block
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
        $voucherModal.modal "hide"
        window.location.reload()
      error: (xhr, textStatus, errorThrown) ->
        if xhr.status == 400
          container.html xhr.responseText
      complete: (msg) ->
        $(".modal-footer",$voucherModal).unblock()
        $voucherModal.trigger "shown"
      type: $form.attr "method"


  $(document).on "click","a.editMember", (e) ->
    e.preventDefault()
    $container = $(".modal-body",$memberModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      $container.html response
      $(".hideForNewMember").removeClass("hidden").show()
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
      
    activities = []
    $.each $("#dende_vouchersbundle_voucher_activities option"), (i,item) ->
      activities.push $(item).val()  
      
    $("#dende_vouchersbundle_voucher_activities").val(activities).select2
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

  $entranceModal.on "shown", () ->
    $("input#dende_entriesbundle_entry_entryDate").datetimepicker
      dateFormat: "dd.mm.yy"
      
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
        
  $(document).on "click","a#addEntrance", (e) ->
    e.preventDefault()
    $form = $("form#entranceForm",$entranceModal)
    container = $(".modal-body",$entranceModal)
    action = $form.attr "action"
    data = $form.serialize()
    $(".modal-footer",$entranceModal).block
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
        $entranceModal.modal "hide"
        window.location.reload()
      error: (xhr, textStatus, errorThrown) ->
        if xhr.status == 400
          container.html xhr.responseText
      complete: (msg) ->
        $(".modal-footer",$entranceModal).unblock()
      type: $form.attr "method"
    
    
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
