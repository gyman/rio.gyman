$ ->   
  jQuery.extend jQuery.fn.dataTableExt.oSort,
    "date-eu-pre": (date) ->
      date = date.replace(" ", "")
      if date.indexOf(".") > 0
        eu_date = date.split(".")
      else
        eu_date = date.split("/")

      if eu_date[2]
        year = eu_date[2]
      else
        year = 0

      month = eu_date[1]
      month = 0 + month  if month.length is 1

      day = eu_date[0]
      day = 0 + day  if day.length is 1
      (year + month + day) * 1

    "date-eu-asc": (a, b) ->
      (if (a < b) then -1 else ((if (a > b) then 1 else 0)))

    "date-eu-desc": (a, b) ->
      (if (a < b) then 1 else ((if (a > b) then -1 else 0)))


    $("#membersList").dataTable aoColumns: [null, null, 
    sType: "date-eu"
    , null, null]
    
  $memberModal = $("#editMemberModal")
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