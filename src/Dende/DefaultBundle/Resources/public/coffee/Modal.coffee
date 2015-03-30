class @Modal
  constructor: (@params) ->
    if !@params
      @params = {}

    @$modal =  $(@modalSelector)

    if @params.node?
      @$modal = $(@params.node)
    
    @$titleElement = $("h3#modalTitle",@$modal)
    @$headerElement = $("div.modal-header",@$modal)
    @$bodyElement = $("div.modal-body",@modal)
    @$footerElement = $("div.modal-footer",@$modal)
    
    if @params.body?
      @setBody ""
      
    if @params.url?
      @url = @params.url 
      
    if @params.title?
      @setTitle @params.title
    
    if @params.footer?
      @setFooter @params.footer

    @setupModal()
  
  modalSelector: "div#modalWindow"
  windowClass: null
  isOpened: false
  
  setupModal: () =>
    console.log @$modal
#    @$modal.modal
#      keyboard: false
#      show: false

    @$modal.off("hidden.addWindowClass").on "hidden.addWindowClass", (e) =>
      if @windowClass != null
        @getModal().removeClass @windowClass
        @windowClass = null
  
    @$modal.off("hidden.setIsOpened").on "hidden.setIsOpened", (e) =>
      @isOpened = false
    @$modal.off("shown.setIsOpened").on "shown.setIsOpened", (e) =>
      @isOpened = true
  
  getModal: =>
    @$modal
    
  setTitle: (title) ->
    @$titleElement.text(title)  

  setHeader: (header) ->
    @$headerElement.html(header)
    
  setBody: (body) =>
    @$bodyElement.html(body)
    
  setFooter: (footer) ->
    @$footerElement.html(footer)
  
  sendForm: () ->
    $form = $("form",@$modal)
    action = $form.attr "action" || @url
    data = $form.serialize()
    method = $form.attr "method"

    $.ajax
      url: action
      data: data
      type: @form.attr "method"
      success: (response) =>
        @setBody response

  show: =>
    console.log "showing"
    @$modal.modal "show"
    console.log "showed"

  hide: =>
    console.log "hiding"
    @$modal.modal "hide"
    console.log "hidden"

  block: (full) ->
    @unblock
    if full
      @getModal().block()
    else
      @$footerElement.block()
      
  unblock: () ->
    @getModal().unblock()
    @$footerElement.unblock()
    
  loadFromUrl: (url) =>
    $.get url, (response) =>
      @setBody response
  
  showFromUrl: (url) =>
    if @isOpened == true
      console.log "is opened"
      @$modal.off("hidden.imidiateShow").on "hidden.imidiateShow", (e) =>
        $.get url, (response) =>
          window.modal.setBody response
          window.modal.show()
          window.modal.getModal().off("hidden.imidiateShow")
        .error () =>
          @memberNotFound()
      @hide()
    else
      console.log "is CLOSED"
      $.get url, (response) =>
        console.log "1"
        @setBody response
        console.log "2"
        @show()
        console.log "3"
      .error () =>
        console.log "error"
        @memberNotFound()
        
  memberNotFound: =>
    alert "Nie znaleziono takiego uczestnika"
        
  setupFromNode: (node) =>
    $dataDiv = $(node)
    $footer = $(".modal-footer", $dataDiv).html()
    $header = $(".modal-header", $dataDiv).html()

    @setFooter($footer);
    @setHeader($header);
    
    $(node).remove();
    
  setModalWindowClass: (cssClass) =>
    @windowClass = cssClass
    @getModal().addClass cssClass
    