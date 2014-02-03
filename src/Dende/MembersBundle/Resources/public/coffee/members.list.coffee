$ ->   
  $memberModal = $("#editMemberModal")
  $voucherModal = $("#newVoucherModal")
  $filterModal = $("#newVoucherModal")
  
  $(document).on "shown", $filterModal, (e) ->
    console.log "otwarty"
  
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
        
      $voucherModal.on "hidden", () ->
        datatable.fnReloadAjax()        

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

  window.datatable = $("table#membersList").dataTable
    sAjaxSource: $("table#membersList").attr("data-ajax-source")
    sDom: "<'row-fluid'<'span6'><'span6'f>r>t<'row-fluid'<'span6'li><'span6'p>>"
    bProcessing:true
    bFilter: true
    bLengthChange: true
    bServerSide:true
    bStateSave: true
    sPaginationType:"bootstrap"
    bJQueryUI:false
    bAutoWidth:false
    fnServerParams: ( aoData ) ->
      aoData.push
        name: "MyName"
        value: "MyValue"
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
    

