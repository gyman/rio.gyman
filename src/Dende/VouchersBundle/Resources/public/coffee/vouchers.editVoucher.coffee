class @EditVoucher
  constructor: ()->
    @modal = window.modal
    @$modalWindow = @modal.getModal()
  
    @initDatePickers()
    @initSelect()
    @initSpinners()
    @initSaveButton()
    @initOpenInfo()
    
  activitiesInfo: "div#ui-activitiesInfo"
  activitiesSelector: "select#dende_vouchersbundle_voucher_activities"
  saveButtonSelector: "a#submitVoucherFormButton"
  priceSelector: "#dende_vouchersbundle_voucher_price"
  amountSelector: "#dende_vouchersbundle_voucher_amount"
  
  initDatePickers: () =>
    $("#dende_vouchersbundle_voucher_startDate, #dende_vouchersbundle_voucher_endDate",@$modalWindow).datepicker
      dateFormat: "dd.mm.yy"
    
  initSelect: () =>
    $(@activitiesSelector,@$modalWindow).select2
      dropdownAutoWidth : true
      containerCss : 
        width : "200px"
        
  initSpinners: () =>
    $(@priceSelector,@$modalWindow).spinner
      min: 0
      step: 10
      start: 1000
      numberFormat: "C"
    $(@amountSelector,@$modalWindow).spinner
      min: 0
      step: 1
      start: 1000
      numberFormat: "C"
      
  initSaveButton: () =>
    @$modalWindow.off("click.voucher.createNew").on "click.voucher.createNew", @saveButtonSelector, (e) =>
      e.preventDefault()
      $form = $("form#voucherForm",@$modalWindow)
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
          if xhr.status == 400
            @modal.setBody xhr.responseText
        complete: (msg) =>
          @modal.unblock()
        type: $form.attr "method"
        
  initOpenInfo: () =>
    eventName = "change.voucher.activities"
    
    @$modalWindow.off(eventName).on eventName, @activitiesSelector, (e) =>
      list = $(e.target).val()
      if list == null || list.length == 0
        $(@activitiesInfo).show()
      else
        $(@activitiesInfo).hide()
        
    @$modalWindow.trigger eventName