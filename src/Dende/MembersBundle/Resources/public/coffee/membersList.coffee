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
        modal = $("#editMemberModal")
        $(".modal-footer",modal).block
            message: '<img src="/bundles/layout/images/loaders/circular/072.gif" alt="loading"/>'
            css : 
                border: 'none', 
                backgroundColor:'transparent' 
            overlayCSS:
                backgroundColor: '#E8EAEB'
        
        form = $("form",modal)
        action = form.attr "action"
        data = form.serialize()

        $.post action, data, (result) ->
            $(".modal-footer",modal).unblock()
            modal.modal("hide")