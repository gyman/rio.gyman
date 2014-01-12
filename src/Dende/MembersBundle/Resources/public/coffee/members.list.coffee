$ ->   
  ###
  jQuery.extend jQuery.fn.dataTableExt.oSort,
    "date-eu-pre": (date) ->
      date = $(date).text()
      
      date = date.replace(" ", "")

      if date == ""
        return

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
    
  ###
    
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

  ###    
  $(document).on "click","td.profileColumn", (e) ->
    e.preventDefault()
    $container = $(".modal-body",$memberModal)
    href = $("[data-member-edit-url]",this).attr "data-member-edit-url"
    $.get href, (response) ->
      $container.html response
      $(".hideForNewMember").removeClass("hidden").show()
      $memberModal.modal
        "show" : true
  ###        

  $(document).on "click","a.editMember", (e) ->
    e.preventDefault()
    e.stopPropagation()
    $container = $(".modal-body",$memberModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      $container.html response
      $(".hideForNewMember").removeClass("hidden").show()
      $memberModal.modal
        "show" : true
        
  $(document).on "click","a.newVoucher", (e) ->
    e.stopPropagation()
    e.preventDefault()
    $container = $(".modal-body",$voucherModal)
    href = $(this).attr "href"
    $.get href, (response) ->
      $container.html response
      $voucherModal.modal
        "show" : true
        
#      $voucherModal.on "hidden", () ->
#        window.location.reload()        

  $(document).on "click", "#membersList tbody tr", (e) ->
    $tr = $(this)
    return  if $tr.data("detailsOpened")
    return  if $tr.hasClass("entityDetails")
    $("tr.entityDetails").remove()
    $("tr",$(e.target).parents "table").data "detailsOpened", false
    url = $tr.attr("data-details-url")
    columnsCount = $tr.children().length
    $newTr = $("<tr />").addClass("entityDetails")
    $newTd = $("<td />").attr("colspan", columnsCount)
    $detailsDiv = $("<div />").addClass("entityDetailsContent container-fluid")
    $tr.after $newTr.html($newTd.html($detailsDiv))
    $detailsDiv.block()
    $.get url, (response) ->
      $detailsDiv.html response.data
      $detailsDiv.unblock()
      $tr.data "detailsOpened", true

  $("table#membersList").dataTable
    sAjaxSource: $("table#membersList").attr("data-ajax-source")
    sDom: "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
    bProcessing:true
    bFilter: true
    bLengthChange: true
    bServerSide:true
    bStateSave: true
    sPaginationType:"bootstrap"
    bJQueryUI:false
    bAutoWidth:false
    bServerMethod: "POST"
    aoColumns: [
      bSortable: true
    ,
      bSortable: true
    ,
      bSortable: true
    ,
      bSortable: false
    ,
      bSortable: false
    ]
    oLanguage:
      sSearch:"<span>Szukaj:</span> _INPUT_"
      sLengthMenu:"<span>_MENU_ pozycji</span>"
      oPaginate:
        sFirst:"Pierwsza"
        sLast:"Ostatnia"
    fnRowCallback: (nRow, aData, iDisplayIndex) ->
      newTr = $(aData[0])
      tdCollection = $("td",newTr);
      $(newTr.prop "attributes").each ->
        $(nRow).attr this.nodeName,this.nodeValue
      for td,i in tdCollection
        $("td:eq("+i+")",nRow).replaceWith $(td)

  $(".dataTables_length select").select2()
    

