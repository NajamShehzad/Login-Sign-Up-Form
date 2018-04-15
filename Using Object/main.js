

function signIn() {
    var condition = JSON.parse(localStorage.getItem("condition"));
    var name1 = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;
    var condition1 = true;
    var userdata = JSON.parse(localStorage.getItem("users"));

    if (condition) {
        condition1 = true;
        for (var i = 0; i < userdata.length; i++) {
            if (userdata[i].userName == name1 && userdata[i].password == pass) {
              //  alert("Object is working");
                localStorage.setItem("userNumber", JSON.stringify(i));
                condition1 = false;
                localStorage.setItem("logincon", JSON.stringify(true));
                window.location.href = "mainPage.html";
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
var test;
function signup() {
    var condition = JSON.parse(localStorage.getItem("condition"));
    
    var userdata = JSON.parse(localStorage.getItem("users"));


    if (condition) {
        var name1 = document.getElementById("userName").value;
        var cemail = document.getElementById("email").value;
        var condition1 = true;
        for (var i = 0; i < userdata.length; i++) {
            if (name1 == userdata[i].userName || cemail == userdata[i].email) {
                condition1 = false;
                break;
            }
        }
        if (condition1) {
           
            var user = {
                fullName: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                userName: document.getElementById("userName").value,
                password: document.getElementById("pass").value,
                userToDo: [],
                userTitle: [],
                toDoCondition: false,

            }

            userdata.push(user);
            test = userdata;
            localStorage.setItem("users", JSON.stringify(userdata));
            
            document.getElementById("userName").value = "";
            document.getElementById("fullName").value = "";
            document.getElementById("pass").value = "";
            document.getElementById("email").value = "";

            alert("Thank You For Signing Up");
        }
        else {
            alert("UserName Or Email Is Already Taken");
        }
    }
    else {
        
        userdata = [];
        var user = {
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            userName: document.getElementById("userName").value,
            password: document.getElementById("pass").value,
            userToDo: [],
            userTitle: [],
            toDoCondition: false,

        }
        userdata.push(user);

        localStorage.setItem("users", JSON.stringify(userdata));
        
        localStorage.setItem("condition", JSON.stringify(true));
        document.getElementById("userName").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("email").value = "";

        alert("Thank You For Signing Up");
    }


}