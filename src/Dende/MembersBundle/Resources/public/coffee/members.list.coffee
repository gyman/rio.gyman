$ ->   

  # deleting filters from tabs

  $(document).off("click.members.list.filter.delete").on "click.members.list.filter.delete", "span.delete-filter", (e) ->
    e.preventDefault()
    e.stopPropagation()
    return if !confirm("Czy na pewno chcesz usunąć filtr?")
    $tab = $(e.currentTarget).parents("li")
    href = $(e.currentTarget).attr("data-href")
    $.get href, (response) =>
      $tab.parents("ul").find("li:first-child").addClass("active")
      $tab.remove()
      datatable.fnReloadAjax()

  # setting filters from tabs

  $(document).off("click.members.list.filter.set").on "click.members.list.filter.set", "ul#filterTabs.nav li a", (e) ->
    e.preventDefault()
    e.stopPropagation()
    $tabContainer = $(e.currentTarget).parents("ul#filterTabs")
    $tab = $(e.currentTarget).parents("li")
    href = $(e.currentTarget).attr("href")
    $.get href, (response) =>
      $tabContainer.find("li").removeClass("active")
      $tab.addClass("active")
      datatable.fnReloadAjax()
      
  # unrolling the details

  $(document).on "click", "#membersList tbody tr", (e) ->
    $tr = $(this)
    if $tr.data "detailsOpened"
      $tr.data "detailsOpened", false
      $tr.siblings(".entityDetails").remove()
      return
    return  if $tr.hasClass("entityDetails")
    $("tr.entityDetails").remove()
    $("tr",$(e.currentTarget).parents "table").data "detailsOpened", false
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
    

