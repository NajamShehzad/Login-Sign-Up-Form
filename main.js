var condition = JSON.parse(localStorage.getItem("condition"));
var userName = JSON.parse(localStorage.getItem("userName"));
var password = JSON.parse(localStorage.getItem("password"));
        

function signIn() {
    var name1 = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;
    if (condition) {
        for(var i = 0 ; i < userName.length; i++){
            if(userName[i] == name1 && password[i] == pass ){
                alert("Got It Bro");
            }
        }

    }
    else {
        alert("Please Check Your Usernam/Password");
        window.location = "signupPage.html";

    }


}