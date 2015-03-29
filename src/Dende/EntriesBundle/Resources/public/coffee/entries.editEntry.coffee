class @EditEntry
  constructor: ()->
    @modal = window.modal
    @$modalWindow = @modal.getModal()
  
    @setupEntryTypeHidder()
    @setupSelect()
    @setupSpinner()
    @setupSendForm()
    @setupEnterSend()
    
  entryTypeInputSelector: "input[name='dende_entriesbundle_entry\\\[entryType\\\]']"
  priceInputSelector: "input#dende_entriesbundle_entry_entryPrice"
  
  setupSelect: =>
    @updatePriceField $(@entryTypeInputSelector).filter ":selected,:checked"
  
    $("#dende_entriesbundle_entry_activity").select2
      dropdownAutoWidth: true
      containerCss:
        width: "200px"
        
  setupSpinner: =>
    $(@priceInputSelector).spinner
      min: 0
      step: 10
      start: 1000
      numberFormat: "C"
        
  setupEntryTypeHidder: =>
    $(@entryTypeInputSelector).uniform()
    @$modalWindow.off("change.entries.entryType").on "change.entries.entryType", @entryTypeInputSelector, (e) =>
      @updatePriceField($(e.currentTarget))

  updatePriceField: ($el) =>
    $controlDiv = $(@priceInputSelector).parents "div.control-group"
    $controlDiv.hide()
    if $el.val() == "paid"
      $controlDiv.show()
    else
      $controlDiv.hide()

  setupSendForm: =>
    @$modalWindow.off("click.addEntrance").on "click.addEntrance","a#saveFormInModal", (e) =>
      e.preventDefault()
      @sendFormData()
      
  setupEnterSend: =>
    $(document).off("keyup.addEntrance").on "keyup.addEntrance", (e) =>
      e.preventDefault()
      e.stopPropagation()
      
      # if e.which == 13
        # @sendFormData()
        # $(document).off("keyup.addEntrance")
      
  sendFormData: =>
    $form = $("form#entranceForm",@$modalWindow)
    action = $form.attr "action"
    data = $form.serialize()

    @modal.block()

    $.ajax
      url: action
      data: data
      success: (response) =>
        @modal.hide()
        datatable.fnReloadAjax()
      error: (xhr, textStatus, errorThrown) =>
        @modal.setBody xhr.responseText if xhr.status == 400
      complete: (msg) =>
        @modal.unblock()
      type: $form.attr "method"
