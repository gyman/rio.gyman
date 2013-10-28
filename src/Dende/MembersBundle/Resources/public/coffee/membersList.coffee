$ ->

    $("#membersList").dataTable()
  
    $(document).on "click","a.editMember", (e) ->
        e.preventDefault()
        modal = $("#editMemberModal")
        container = $(".modal-body",modal)
        href = $(this).attr "href"
        
        $.get href, (response) ->
            container.html response
            modal.modal
                "show" : true
        
    $(document).on "click","#saveFormInModal", (e) ->
        console.log "save form"
        $(".modal-footer").block
            message: '<img src="/bundles/layout/images/loaders/circular/001.gif" alt="loading"/>'
            css : 
                border: 'none', 
                backgroundColor:'transparent' 
        
        