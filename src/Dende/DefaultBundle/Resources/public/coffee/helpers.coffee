# setups modal to close existing voucher

window.setupNewVoucherModalForClosingPrevious = ->
  modal = "#newVoucherModal"
  $footer = updateFooter modal, "#ui-closeVoucherData"
  $footer.off("click").on "click", "#dontCloseVoucher, #confirmCloseVoucher", (e) ->
    e.preventDefault()
    url = $(e.target).attr "href"
    $(".modal-body", modal).load url, (data) ->
      return
     
# setups modal to sell voucher

window.setupNewVoucherModalForSelling = ->
  modal = "#newVoucherModal"
  $footer = updateFooter modal, "#ui-sellVoucherData"
      
  $("#dende_vouchersbundle_voucher_startDate, #dende_vouchersbundle_voucher_endDate").datepicker
      dateFormat: "dd.mm.yy"

  $("#dende_vouchersbundle_voucher_activities").select2
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
    
  $footer.off("click.createNewVoucher").on "click.createNewVoucher", "a#createNewVoucher", (e) ->
    e.preventDefault()
    $form = $("form#voucherForm",$(modal))
    container = $(".modal-body",$(modal))
    action = $form.attr "action"
    data = $form.serialize()
    $(".modal-footer",$(modal)).block()
        
    $.ajax
      url: action
      data: data
      success: (response) ->
        $(modal).modal "hide"
        datatable.fnReloadAjax()
      error: (xhr, textStatus, errorThrown) ->
        if xhr.status == 400
          container.html xhr.responseText
      complete: (msg) ->
        $(".modal-footer",$(modal)).unblock()
        $(modal).trigger "shown"
      type: $form.attr "method"

# updates modal footer
    
window.updateFooter = (modal, source) ->
  $footer = $(".modal-footer",$(modal))
  $dataSpan = $(source)
  $oldContent = $footer.html()
  $footer.html $('.modal-footer',$dataSpan).html()
  $footer.data "old-content", $oldContent
  $dataSpan.html ""
  return $footer

# updates modal header
    
window.updateHeader = (modal, source) ->
  $header = $(".modal-header",$(modal))
  $dataSpan = $(source)
  $oldContent = $header.html()
  $header.html $('.modal-header',$dataSpan).html()
  $header.data "old-content", $oldContent
  return $header