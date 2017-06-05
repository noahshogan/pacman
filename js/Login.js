var users =new Array();
var hal=0;
$(document).ready(function() {
    var user1={username:"a",firstname:"a",lastname:"a",password:"a"};
    var user2={username:"test2017",firstname:"test2017",lastname:"test2017",password:"test2017"};
    users.push(user1);
    users.push(user2);
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            UserName: {
                required: true,
                maxlength: 12
            },
            FirstName: {
                required: true,
                lettersonly: true,
                maxlength: 12
            },
            LastName: {
                required: true,
                lettersonly: true,
                maxlength: 12
            },
            Email: {
                required: true,
                email: true
            },
            Password: {
                required: true,
                minlength: 8,
                alphanumeric: true,
                maxlength: 16
            },
            Birthdate: {
                required: true
            }
        },
        // Specify validation error messages
        messages: {
            FirstName: "Please enter your firstname, Letters only please.",
            LastName: "Please enter your lastname, Letters only please.",
            Password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long"
            },
            Email: "Please enter a valid email address",
            Birthdate: "Please enter a valid date"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
    //validator new rules
    $.validator.addMethod("alphanumeric", function (value, element) {
        return this.optional(element) || /^\w+$/i.test(value);
    }, "Letters and numbers only please");
    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");
});
function AddUserToArray(UserName,FirstName,LastName,Password,Email,Birthdate)
{
    if (hal==0){
        hal=1;
        return;
    }
    var user = {username:UserName.value,firstname:FirstName.value,lastname:LastName.value,password:Password.value};
    if((UserName.className==="valid"||UserName.className==="")&&(FirstName.className==="valid"||FirstName.className==="")
        &&(LastName.className==="valid"||LastName.className==="")&&(Password.className==="valid"||Password.className==="")
        &&(Email.className==="valid"||Email.className==="")&&(Birthdate.className==="valid"||Birthdate.className===""))
    {
        for (var i = 0; i < users.length; i++) {
            if(users[i].username===UserName.value)
            {
                window.alert("Please choose another user name,the user name "+UserName.value+" is ocuppied!");
                return;
            }
        }
        users.push(user);
        alert("User "+UserName.value+" added succssesfully!")
        $('#registerModel').modal('hide');
        $('#welcomeModel').modal();
    }
    else
    {
        alert("Not all fields are properly filled!")
    }
}
var _UserName;
function validateLogin(UserName,Password)
{
    for (var i = 0; i < users.length; i++) {
        if(users[i].username===UserName&&users[i].password===Password)
        {
            window.alert("Login succesfully!");
            _UserName=UserName;
            //gotoGameDiv();
    $('.frame').hide();

            $('#LogInModel').modal('hide');
            $('#gamePrefferences').modal();
            $('#dialog-form').show();
            return;
        }
    }
    alert("wrong username or password, please try again!")
}
function gotoGameDiv(smallBall,midBall,bigBall,AMB,AOM,time) {
    $('.frame').hide();
    if(AMB>90||AMB<50){
        window.alert("number of balls must be between 50 - 90")
        $("#dialog-form").show();
    }
    if(!parseInt(AMB)){
        window.alert("number of balls numeric")
        $("#dialog-form").show();
    }
    else if (AOM<1||AOM>3){
        window.alert("number of monsters must be between 1 - 3")
        $("#dialog-form").show();
    }
    else if (!parseInt(AOM)){
        window.alert("number of monsters must be numeric")
        $("#dialog-form").show();
    }
    else if (time<60){
        window.alert("time must be greater then 60")
        $("#dialog-form").show();
    }
    else if (!parseInt(time)){
        window.alert("time must be numeric")
        $("#dialog-form").show();
    }
    else{
        $('#gamePrefferences').modal('hide');
        $('#Game').show();
            Start(smallBall,midBall,bigBall,AMB,AOM,time,_UserName);

    }
}