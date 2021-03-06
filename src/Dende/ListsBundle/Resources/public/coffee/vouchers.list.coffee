$ ->
  window.datatable = $("table#vouchersList").dataTable
    sAjaxSource: $("table#vouchersList").attr("data-ajax-source")
    sDom: "<'row-fluid'<'span6'><'span6'f>r>t<'row-fluid'<'span6'li><'span6'p>>"
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
      bSortable: true
    ,
      bSortable: true
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

  # delete voucher
  
  $(document).off("click.vouchers.list.delete").on "click.vouchers.list.delete", "a.removeVoucher", (e) ->
    e.preventDefault()
    e.stopPropagation()
    return if !confirm("Czy na pewno chcesz usunąć karnet?")
    $row = $(e.currentTarget).parents("tr")
    href = $(e.currentTarget).attr("href")
    $.get href, (response) =>
      $row.remove()