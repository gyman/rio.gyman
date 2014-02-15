class @EditMember 
  constructor: ()->
    @modal = window.modal
    @$modalWindow = @modal.getModal()
  
    @initDatepickers()
    @initSelects()
    @initActivities()
    @initDeleteCheckbox()
    @initSaveButton()
    @initVoucherTab()
    
    webcamTab = new WebCamTab()
    
  BUTTON_SAVE_STATE: "Zapisz"
  BUTTON_SAVE_CLASS: "btn-primary"
  BUTTON_DELETE_STATE: "Usuń"
  BUTTON_DELETE_CLASS: "btn-danger"
   
  deleteCheckbox: null
  $saveButton: null
    
  initVoucherTab: =>
    $(".dial").knob 
      'min':0
        
  initDeleteCheckbox: =>
    @deleteCheckbox = $("input#deleteUserCheckbox",@$modalWindow)
    @deleteCheckbox.change @handleDeleteCheckboxChange
  
  initSelects: =>
    $("#dende_membersbundle_member_belt").uniform()
    $("#dende_membersbundle_member_gender").uniform()
  
  initActivities: =>
    activities = []
    $.each $("#dende_membersbundle_member_activities option"), (i,item) ->
      activities.push $(item).val()  
  
  handleDeleteCheckboxChange: (e) =>
    e.preventDefault()
    if @deleteCheckbox.is ":checked"
      @$saveButton.text @BUTTON_DELETE_STATE
      @$saveButton.removeClass @BUTTON_SAVE_CLASS
      @$saveButton.addClass @BUTTON_DELETE_CLASS
    else
      @$saveButton.text @BUTTON_SAVE_STATE
      @$saveButton.removeClass @BUTTON_DELETE_CLASS
      @$saveButton.addClass @BUTTON_SAVE_CLASS
  
  initSaveButton: =>
    @$saveButton = $("#saveFormInModal",@$modalWindow)
    @$saveButton.off("click.saveButton").on "click.saveButton", @handleSaveButton
        
  handleSaveButton: (e) =>
    e.preventDefault()
    @form = $("form#memberForm",@$modalWindow)
    if @deleteCheckbox? and @deleteCheckbox.is ":checked" 
      if confirm "Czy na pewno skasować użytkownika?"
        deleteAction = @form.attr "data-delete-action";
        $.get deleteAction, @handleDeleteAction
    else
      container = $(".modal-body",@$modalWindow)
      action = @form.attr "action"
      data = @form.serialize()
      modal.block()
      @handleSubmitForm action, data, container

  handleDeleteAction: (e) =>
    @modal.hide()
    datatable.fnReloadAjax() 
        
  handleSubmitForm: (action,data, container) =>
    $.ajax
      url: action
      data: data
      success: (response) =>
        datatable.fnReloadAjax()
        @modal.hide()
      error: (xhr, textStatus, errorThrown) =>
        if xhr.status == 400
          @modal.setBody xhr.responseText
        else if xhr.status == 500
          alert xhr.responseText
      complete: =>
        @modal.unblock()
      type: @form.attr "method"
  
  initDatepickers: () =>
    $("#dende_membersbundle_member_birthdate",@$modalWindow).datepicker
      dateFormat: "dd.mm.yy"
  