window.setupNewVoucherModalForClosingPrevious = ->
    BLOCK_CONFIG = 
        message: '<img src="/bundles/layout/images/loaders/circular/072.gif" alt="loading"/>'
        css : 
          border: 'none', 
          backgroundColor:'transparent' 
        overlayCSS:
          backgroundColor: '#E8EAEB' 

    $voucherModal = $("#newVoucherModal")
    $footer = $(".modal-footer",$voucherModal)
    $dataSpan = $("#ui-closeVoucherData")
    
    $oldContent = $footer.html()
    
    $dontCloseButton = $('<a id="dontCloseVoucher" class="btn pull-right">Nie zamykaj</a>')
    $dontCloseButton.attr "href", $dataSpan.attr "data-deny-url"
    
    $confirmCloseButton = $('<a id="confirmCloseVoucher" class="pull-right">Zamknij i stwórz nowy </a>')
    $confirmCloseButton.attr "href", $dataSpan.attr "data-confirm-url"
    
    $($dontCloseButton).on "click", (e) ->
        closeVoucherDecisionAction e
        
    $($confirmCloseButton).on "click", (e) ->
        closeVoucherDecisionAction e    
    
    $footer.html $dontCloseButton
    $footer.append $confirmCloseButton
    
    closeVoucherDecisionAction = (e) ->
        $footer.block BLOCK_CONFIG
        e.preventDefault()
        href = $(e.target).attr "href"
        $(".modal-body",$voucherModal).load href, (data) ->
            $footer.html $oldContent
            $footer.unblock()
        
    return
            
