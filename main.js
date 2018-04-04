var condition = JSON.parse(localStorage.getItem("condition"));
var userName = JSON.parse(localStorage.getItem("userName"));
var password = JSON.parse(localStorage.getItem("password"));
var condition1 = true;

function signIn() {
    var name1 = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;
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
var condition = JSON.parse(localStorage.getItem("condition"));
var userName = JSON.parse(localStorage.getItem("userName"));
var password = JSON.parse(localStorage.getItem("password"));
var email = JSON.parse(localStorage.getItem("email"));
var fullName = JSON.parse(localStorage.getItem("fullName"));
var check2;
var check;
function signup() {
    if (condition) {
      
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
        alert("Thank You For Signing Up"); 
        document.getElementById("userName").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("email").value = "";
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
        alert("Thank You For Signing Up");
    }


}