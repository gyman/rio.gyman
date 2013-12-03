BLOCK_CONFIG = 
  message: '<img src="/bundles/layout/images/loaders/circular/072.gif" alt="loading"/>'
  css : 
    border: 'none', 
    backgroundColor:'transparent' 
  overlayCSS:
    backgroundColor: '#E8EAEB' 

# setups modal to close existing voucher

window.setupNewVoucherModalForClosingPrevious = ->
  modal = "#newVoucherModal"
  $footer = updateFooter modal, "#ui-closeVoucherData"
  $footer.off("click").on "click", "#dontCloseVoucher, #confirmCloseVoucher", (e) ->
    e.preventDefault()
    url = $(e.target).attr "href"
    $(".modal-body", modal).load url, (data) ->
      console.log data
     
# setups modal to sell voucher

window.setupNewVoucherModalForSelling = ->
  modal = "#newVoucherModal"
  $footer = updateFooter modal, "#ui-sellVoucherData"
      
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
    
  $footer.off("click").on "click", "a#createNewVoucher", (e) ->
    e.preventDefault()
    $form = $("form#voucherForm",$(modal))
    container = $(".modal-body",$(modal))
    action = $form.attr "action"
    data = $form.serialize()
    $(".modal-footer",$(modal)).block BLOCK_CONFIG
    $.ajax
      url: action
      data: data
      success: (response) ->
        container.html response
      error: (xhr, textStatus, errorThrown) ->
        if xhr.status == 400
          container.html xhr.responseText
      complete: (msg) ->
        $(".modal-footer",$(modal)).unblock()
        $(modal).trigger "shown"
      type: $form.attr "method"

# setups modal to print voucher

window.setupNewVoucherModalForPrinting = ->
  modal = "#newVoucherModal"
  $footer = updateFooter modal, "#ui-printVoucherData"
  
  $footer.off("click").on "click", "#printVoucherButton", (e) ->
      e.preventDefault()
      url = $(e.target).attr "href"
      newWin = window.open(url, 'printVoucher', 'width=800,height=500')
      newWin.print()
    
# updates modal footer
    
updateFooter = (modal, source) ->
  $footer = $(".modal-footer",$(modal))
  $dataSpan = $(source)
  $oldContent = $footer.html()
  $footer.html $('.modal-footer',$dataSpan).html()
  $footer.data "old-content", $oldContent
  return $footer

