
$ ->      
  BLOCK_CONFIG =
    message: '<img src="/bundles/layout/images/loaders/circular/072.gif" alt="loading"/>'
    css : 
      border: 'none', 
      backgroundColor:'transparent' 
    overlayCSS:
      backgroundColor: '#E8EAEB' 

  #method for modal

  window.setupMemberModalForEdit = ->
    #setupWebcam()
    
    FOTO_UPLOAD_ERROR = "Błąd po stronie serwera! Spróbuj z innym plikiem graficznym"
    
    modal = $("#editMemberModal")
    $header = updateHeader modal, "#ui-editMemberData"
    $footer = updateFooter modal, "#ui-editMemberData"
    
    #$("#dende_membersbundle_member_fotoUploader",modal).fileupload
    #  limitMultiFileUploads: 1
    #  done: (e, data) ->
    #    response = data.response().result
    #    responseJSON = $.parseJSON(response)
    #    pathname = responseJSON.pathname
    #    filename = responseJSON.filename
    #    $("img#memberFoto").attr "src", pathname
    #    $("input#dende_membersbundle_member_foto").val filename
    #  fail: (e, data) ->
    #    alert FOTO_UPLOAD_ERROR
    ###
    $("#dende_membersbundle_member_birthdate").datepicker
      dateFormat: "dd.mm.yy"
      
    $deleteCheckbox = $("input#deleteUserCheckbox",modal)
    
    $deleteCheckbox.change (e) ->
      BUTTON_SAVE_STATE = "Zapisz"
      BUTTON_SAVE_CLASS = "btn-primary"
      BUTTON_DELETE_STATE = "Usuń"
      BUTTON_DELETE_CLASS = "btn-danger"
      
      btn = $("#saveFormInModal",$footer)
      console.log btn
      e.preventDefault()
      if $deleteCheckbox.is ":checked"
        btn.text BUTTON_DELETE_STATE
        btn.removeClass BUTTON_SAVE_CLASS
        btn.addClass BUTTON_DELETE_CLASS
      else
        btn.text BUTTON_SAVE_STATE
        btn.removeClass BUTTON_DELETE_CLASS
        btn.addClass BUTTON_SAVE_CLASS
        
    $(document).on "click","#saveFormInModal", (e) ->
      e.preventDefault()
      $form = $("form#memberForm",modal)
      if $deleteCheckbox.is ":checked"
        if confirm "Czy na pewno skasować użytkownika?"
          deleteAction = $form.attr "data-delete-action";
          $.get deleteAction, {}, (e) ->
            modal.modal "hide"
            window.location.reload()
      else
        container = $(".modal-body",modal)
        action = $form.attr "action"
        data = $form.serialize()
        $(".modal-footer",modal).block BLOCK_CONFIG
        $.ajax
          url: action
          data: data
          success: (response) ->
            container.html response
            modal.modal "hide"
            window.location.reload()
          error: (xhr, textStatus, errorThrown) ->
            if xhr.status == 400
              container.html xhr.responseText
            else if xhr.status == 500
              alert xhr.responseText
          complete: (msg) ->
            $(".modal-footer",modal).unblock()
          type: $form.attr "method"
          
    $(modal).off("click.makeFoto").on "click.makeFoto", "a#makeFoto", (e) ->
      e.preventDefault();
      console.log "click w anchor"
      webcam.capture()
      false
###
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
    
# function that setups camera
###    
window.setupWebcamUnused = () ->
  window.pos = 0;
  
  $("#camera").webcam
    width: 320
    height: 240
    mode: "callback"
    swffile: "/bundles/members/js/jQueryWebcam/jscam_canvas_only.swf"
    onCapture: ->
      webcam.save()
    onSave: (data) ->
      console.log window.pos
      col = data.split(";")
      img = image
      i = 0

      while i < 320
        tmp = parseInt(col[i])
        img.data[window.pos + 0] = (tmp >> 16) & 0xff
        img.data[window.pos + 1] = (tmp >> 8) & 0xff
        img.data[window.pos + 2] = tmp & 0xff
        img.data[window.pos + 3] = 0xff
        window.pos += 4
        i++
      
      if window.pos >= 4 * 320 * 240
        window.pos = 0
        ctx.putImageData img, 0, 0

        formData = new FormData()
        formData.append "UploadedFile", canvas.toDataURL()
        
        $.ajax
          url: $("#camera").attr "data-upload-url"
          type: "POST"
          success: (e) ->
            console.log e
          data: formData
          cache: false
          contentType: false
          processData: false
  
###