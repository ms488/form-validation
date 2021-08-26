$(document).ready(function(){
    var form = $("form"),successMsg = $(".alert");

    //customize new rule called letters
    $.validator.addMethod("letters", function(value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
    });

    //customize new rule called alphanumeric
    $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || value == value.match( /^[a-zA-Z0-9?!@#\[\]\{\}<>~'":;,|\/\\\$%\^\&*\)\(+=\._-]+$/);
    });

    form.validate({
        rules:{
            fname:{
                required:true,
                minlength:2,
                letters:true
            },
            email:{
                required:true,
                email:true
            },
            pass:{
                required:true,
                minlength:6,
                maxlength:15,
                alphanumeric:true
            },
            passConfirm:{
                required:true,
                minlength:6,
                maxlength:15,
                equalTo:"#pass"
            },
        },
        messages:{
            fname:"Please specify your name",
            email:"Please specify a valid email address",
            pass:"Please specify a password hard to guess(at least 6 characters)(alphanumeric and special characters only without spaces)",
            passConfirm:"Please specify the same shit password(at least 6 characters)"
        },
        submitHandler:function(){
            successMsg.show();
        }

    });

    $(".close").click(function(){
        $(".alert").css("display","none");
    })
});





