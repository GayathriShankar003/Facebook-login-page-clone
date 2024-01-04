$(document).ready(function(){
    $('#signupval').validate({
        rules:{
            fname:{
                required: true,
                minlength: 5,
            },
            sname:{
                required: true,
                minlength: 5,
            },
            mobile:{
                required: true,
                
            },
            pass:{
                required:true,
                minlength: 8
            },
            date:{
                required: true,
            },
            month:{
                required: true,
            },
            year:{
                required: true,
            },
            gender:{
                required:true,
            }
        },
        messages:{
            fname:{
                required: "please enter first name"
            }
        }
    })
});
