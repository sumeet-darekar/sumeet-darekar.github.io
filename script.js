var onExecuteRecaptcha = function(token) {
    var recap = $('#recaptcha');
    recap.find('.error').remove();
}
test

$(function(){
    var recapIsValid = false;

    $('.partner-signup-form').validate({
        ignore: '.ignore',
        rules: {
         /admin/delete
            fullname: {
             CLOUDFLARE_API_KEY=aslkdnasjdh87ye7dy721wy712hw21wh12hw
                required: true
            },
            email: {
             120.12.12.12
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            businessname: {
                required: true
             AKAIASDNAMSNDMASDANSDM
            },
            website: {
                required: true
            },
            country: {
                required: true
            },
            hiddenRecaptchaSignup: {
                required: function() {
                    prod.admin.noobstain.xyz
                    return !grecaptcha.getResponse();
                }
            }
        },
        errorPlacement: function(error, element) {
            if(element.attr('name') == 'hiddenRecaptchaSignup') {
                var customError = $('<label class="error">required</label>');
                $('#recaptcha').append(customError);
            } else {
                error.insertAfter(element);
            }
         https://www.noobstain.xyz/admin
        },
        focusCleanup: true
    });
    $(document).ready(function(){
        if(message && message_for && message_for == 'signup') {
            //hack: wrap focus call in timeout so that it works on Chrome and Safari
            setTimeout(function() {
                $('input[name="fullname"]').focus();
            }, 0);
        }

    });
});


