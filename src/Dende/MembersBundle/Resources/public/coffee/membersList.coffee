$ ->      
    BUTTON_SAVE_STATE = "Zapisz"
    BUTTON_DELETE_STATE = "Usuń"
         
    $("#membersList").dataTable()
    
    $modal = $("#editMemberModal")
    $deleteCheckbox = $("input#deleteUserCheckbox")
  
    $(document).on "click","a#createNewMember", (e) ->
        e.preventDefault()
        container = $(".modal-body",$modal)
        href = $(this).attr "href"

        $.get href, (response) ->
            container.html response
            $modal.modal
                "show" : true

    $(document).on "click","a.editMember", (e) ->
        e.preventDefault()
        $container = $(".modal-body",$modal)
        href = $(this).attr "href"
        
        $.get href, (response) ->
            $container.html response
            $modal.modal
                "show" : true

    $modal.on "hidden", () ->
        $deleteCheckbox.attr "checked",false
        $.uniform.update()
        $("#saveFormInModal").text BUTTON_SAVE_STATE
        
    $(document).on "change", $deleteCheckbox, (e) ->
        e.preventDefault()
        if $deleteCheckbox.is ":checked"
            $("#saveFormInModal").text BUTTON_DELETE_STATE
        else
            $("#saveFormInModal").text BUTTON_SAVE_STATE
        
    $(document).on "click","#saveFormInModal", (e) ->
        e.preventDefault()
        $form = $("form#memberForm",$modal)

        if $deleteCheckbox.is ":checked"
            if confirm "Czy na pewno skasować użytkownika?"
                deleteAction = $form.attr "data-delete-action";
                $.get deleteAction, {}, (e) ->
                    $modal.modal "hide"
                    window.location.reload()
        else
            container = $(".modal-body",$modal)
            action = $form.attr "action"
            data = $form.serialize()

            $(".modal-footer",$modal).block
                message: '<img src="/bundles/layout/images/loaders/circular/072.gif" alt="loading"/>'
                css : 
                    border: 'none', 
                    backgroundColor:'transparent' 
                overlayCSS:
                    backgroundColor: '#E8EAEB'  

            $.ajax
                url: action
                data: data
                success: (response) ->
                    container.html response
                    $modal.modal "hide"
                    window.location.reload()
                error: (xhr, textStatus, errorThrown) ->
                    if xhr.status == 400
                        container.html xhr.responseText
                complete: (msg) ->
                    $(".modal-footer",$modal).unblock()
                type: $form.attr "method"
