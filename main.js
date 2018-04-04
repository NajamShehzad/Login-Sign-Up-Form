

function signIn() {
    var condition = JSON.parse(localStorage.getItem("condition"));
    var name1 = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;
    var userName = JSON.parse(localStorage.getItem("userName"));
    var password = JSON.parse(localStorage.getItem("password"));
    var condition1 = true;

    if (condition) {
        condition1 = true;
        for (var i = 0; i < userName.length; i++) {
            if (userName[i] == name1 && password[i] == pass) {
                alert("Got It Bro");
                condition1 = false;
            }
        }
        if (condition1) {
            alert("Please Check Your UserName/Password");

        }
    }
    else {
        alert("Please Check Your Usernam/Password");

    }


}
function signup() {
    var condition = JSON.parse(localStorage.getItem("condition"));
    var userName = JSON.parse(localStorage.getItem("userName"));
    var password = JSON.parse(localStorage.getItem("password"));
    var email = JSON.parse(localStorage.getItem("email"));
    var fullName = JSON.parse(localStorage.getItem("fullName"));

    if (condition) {
        var name1 = document.getElementById("userName").value;
        var condition1 = true;
        for (var i = 0; i < userName.length; i++) {
            if ( name1 == userName[i]){
                condition1 = false;
            }
        }
        if(condition1){
        userName.push(document.getElementById("userName").value);
        password.push(document.getElementById("pass").value);
        email.push(document.getElementById("email").value);
        fullName.push(document.getElementById("fullName").value);
        localStorage.setItem("userName", JSON.stringify(userName));
        localStorage.setItem("password", JSON.stringify(password));
        localStorage.setItem("fullName", JSON.stringify(fullName));
        localStorage.setItem("email", JSON.stringify(email));
        check = userName;
        check2 = fullName;
        document.getElementById("userName").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("email").value = "";

        alert("Thank You For Signing Up");
        }
        else{
            alert("User Name Is Already Taken");
        }
    }
    else {
        fullName = [];
        password = [];
        email = [];
        userName = [];
        userName.push(document.getElementById("userName").value);
        email.push(document.getElementById("email").value);
        fullName.push(document.getElementById("fullName").value);
        password.push(document.getElementById("pass").value);
        localStorage.setItem("userName", JSON.stringify(userName));
        localStorage.setItem("password", JSON.stringify(password));
        localStorage.setItem("fullName", JSON.stringify(fullName));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("condition", JSON.stringify(true));
        condition = JSON.parse(localStorage.getItem("condition"));
        document.getElementById("userName").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("email").value = "";

        alert("Thank You For Signing Up");
    }


}