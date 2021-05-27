
$(document).ready(() => {

    var em = document.getElementById("em");
    var pas = document.getElementById("pass");
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/

    //password validator//
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.





    $("#button1").click(() => {
        if (em.value.trim() == "" || pas.value.trim() == "") {
            em.style.border = em.value.trim() == "" ? "2px solid red" : '';
            pas.style.border = pas.value.trim() == "" ? "2px solid red" : '';
            alert(em.value.trim() == "" ? "Enter email" : 'Enter Password');
            return false;
        }

        else if (regexp.test(em.value) == false) {
            em.style.border = "2px solid red";
            alert("INVALID E-MAIL!!");
            return false;

        }

        else {
            Swal.fire(
                'Success!!',
                'Welcome Admin!',
                'success'
            ).then(() => {
                window.location.replace("/");
            });
        }

    });
    // ------------------------------------sign up validation---------------------------------------//

    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var email = document.getElementById("em2");
    var user = document.getElementById("user1");

    console.log(pass1,pass2,email,user);

    $("#button2").click(() => {
        if (pass1.value.trim() == "" || pass2.value.trim() == "" || email.value.trim() == "" || user.value.trim() == "") {

            pass1.style.border = pass1.value.trim() == "" ? "2px solid red" : '';
            pass2.style.border = pass2.value.trim() == "" ? "2px solid red" : '';
            email.style.border = email.value.trim() == "" ? "2px solid red" : '';
            user.style.border = user.value.trim() == "" ? "2px solid red" : '';

            alert("Fields not filled");
            return false;
        }
        else if (regexp.test(email.value) == false) {
            email.style.border = "2px solid red";
            alert("INVALID E-MAIL!!");
            return false;
        }

        else if (!new RegExp(regex[0]).test(pass1.value) || !new RegExp(regex[1]).test(pass1.value) || !new RegExp(regex[2]).test(pass1.value)) {
            alert("Password must contain atleast one uppercase, one lower case and one number");
            return false;
        }
        else if (pass1.value.trim() != pass2.value.trim()) {
            alert("Passwords doesnt match");
            pass1.style.border = "2px solid red";
            pass2.style.border = "2px solid red";
            return false;
        }

        else {
            Swal.fire(
                'Success!!',
                'Welcome to The Club!!',
                'success'
            ).then(() => {
                window.location.replace("/");
            });
        }
    });


});



