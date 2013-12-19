root = exports ? this

class root.EditMember 
  constructor: (@modalWindow)->
    @initMakeFotoButton()
    @initFileUpload()
    @initDatepickers()
    @initFooter()
    @initWebcam()
    @handleDeleteCheckbox()
    @initSaveButton()
    
    $("#openWebcam").click (e)->
      $("#webcamDiv").toggleClass("hidden")
    
  BUTTON_SAVE_STATE = "Zapisz"
  BUTTON_SAVE_CLASS = "btn-primary"
  BUTTON_DELETE_STATE = "Usuń"
  BUTTON_DELETE_CLASS = "btn-danger"

  BLOCK_CONFIG =
    message: '<img src="/bundles/layout/images/loaders/circular/072.gif" alt="loading"/>'
    css : 
      border: 'none', 
      backgroundColor:'transparent' 
    overlayCSS:
      backgroundColor: '#E8EAEB' 
    
  FOTO_UPLOAD_ERROR = "Błąd po stronie serwera! Spróbuj z innym plikiem graficznym"    
    
  swffile : "/bundles/members/js/jQueryWebcam/jscam_canvas_only.swf"
  cameraId : "#camera"
  buttonMakeFotoId : "a#makeFoto"
   
  pos: 0
  ctx: null
  image: []
  canvas: null
  header: null
  footer: null
  deleteCheckbox: null
  saveButton: null
    
  initFooter: =>
    @footer = @updateFooter @modalWindow, "#ui-editMemberData"
    @saveButton = $("#saveFormInModal",@footer)
    
  handleDeleteCheckbox: =>
    console.log "init delete"
    @deleteCheckbox = $("input#deleteUserCheckbox",@modalWindow)
    console.log @deleteCheckbox
    
    @deleteCheckbox.change (e) ->
      e.preventDefault()
      if @deleteCheckbox.is ":checked"
        @saveButton.text @BUTTON_DELETE_STATE
        @saveButton.removeClass @BUTTON_SAVE_CLASS
        @saveButton.addClass @BUTTON_DELETE_CLASS
      else
        @saveButton.text @BUTTON_SAVE_STATE
        @saveButton.removeClass @BUTTON_DELETE_CLASS
        @saveButton.addClass @BUTTON_SAVE_CLASS
  
  initSaveButton: =>
    $(@saveButton).off("click.saveButton").on "click.saveButton", (e) ->
      e.preventDefault()
      $form = $("form#memberForm",@modalWindow)
      if @deleteCheckbox? and @deleteCheckbox.is ":checked"
        if confirm "Czy na pewno skasować użytkownika?"
          deleteAction = $form.attr "data-delete-action";
          $.get deleteAction, (e) ->
            $(@modalWindow).modal "hide"
            window.location.reload()
      else
        container = $(".modal-body",@modalWindow)
        action = $form.attr "action"
        data = $form.serialize()
        $(".modal-footer",@modalWindow).block @BLOCK_CONFIG
        $.ajax
          url: action
          data: data
          success: (response) ->
            container.html response
            $(@modalWindow).modal "hide"
            window.location.reload()
          error: (xhr, textStatus, errorThrown) ->
            if xhr.status == 400
              container.html xhr.responseText
            else if xhr.status == 500
              alert xhr.responseText
          complete: (msg) ->
            $(".modal-footer",@modalWindow).unblock()
          type: $form.attr "method"
  
  initMakeFotoButton: =>
    $(@modalWindow)
    .off("click.makeFoto")
    .on "click.makeFoto", @buttonMakeFotoId, (e) ->
      e.preventDefault();
      console.log "event"
      webcam.capture()

  initWebcam: => 
    @canvas = document.createElement("canvas")
    @canvas.setAttribute "width", 320
    @canvas.setAttribute "height", 240
    console.log @canvas
    
    @ctx = @canvas.getContext("2d")
    console.log @ctx
    
    @image = @ctx.getImageData(0, 0, 320, 240)
    console.log @image
    
    $(@cameraId).webcam
      width: 320
      height: 240
      mode: "callback"
      swffile: @swffile
      onCapture: ->
        webcam.save()
      onSave: @handleImageSave

  handleImageSave: (data) =>
    col = data.split(";")
    img = @image
    i = 0

    while i < 320
      tmp = parseInt(col[i])
      img.data[@pos + 0] = (tmp >> 16) & 0xff
      img.data[@pos + 1] = (tmp >> 8) & 0xff
      img.data[@pos + 2] = tmp & 0xff
      img.data[@pos + 3] = 0xff
      @pos += 4
      i++

    if @pos >= 4 * 320 * 240
      @pos = 0
      @ctx.putImageData img, 0, 0

      formData = new FormData()
      formData.append "UploadedFile", @canvas.toDataURL()

      @sendFormData formData
      $("#webcamDiv").addClass("hidden")
          
  initFileUpload: () =>
    $("#dende_membersbundle_member_fotoUploader",$(@modalWindow)).fileupload
      limitMultiFileUploads: 1
      done: (e, data) =>
        response = data.response().result
        @handleResponse response
      fail: (e, data) ->
        alert @FOTO_UPLOAD_ERROR

  sendFormData: (formData) =>
    console.log "sendformdata"
    $.ajax
      url: $(@cameraId).attr "data-upload-url"
      type: "POST"
      success: (response,data) =>
        @handleResponse response
      data: formData
      cache: false
      contentType: false
      processData: false

  initDatepickers: () =>
    $("#dende_membersbundle_member_birthdate",$(@modalWindow)).datepicker
      dateFormat: "dd.mm.yy"
  
  handleResponse: (response) =>
    responseJSON = $.parseJSON(response)
    pathname = responseJSON.pathname
    filename = responseJSON.filename
    $("img#memberFoto",$(@modalWindow)).attr "src", pathname
    $("input#dende_membersbundle_member_foto",$(@modalWindow)).val filename
  
  updateFooter: (modal, source) ->
    $footer = $(".modal-footer",$(@modalWindow))
    $dataSpan = $(source)
    $oldContent = $footer.html()
    $footer.html $('.modal-footer',$dataSpan).html()
    $footer.data "old-content", $oldContent
    $dataSpan.html ""
    $footer

  updateHeader: (modal, source) ->
    $header = $(".modal-header",$(@modalWindow))
    $dataSpan = $(source)
    $oldContent = $header.html()
    $header.html $('.modal-header',$dataSpan).html()
    $header.data "old-content", $oldContent
    $header
