$(document).ready(function() {
    $("#signup").click(function() {
        $("#first").fadeOut("fast", function() {
            $("#second").fadeIn("fast");
        });
    });

    $("#signin").click(function() {
        $("#second").fadeOut("fast", function() {
            $("#first").fadeIn("fast");
        });
    });

    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter your password"
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });

    $("#registrationForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 5 characters long"
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
});
