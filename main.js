

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
                localStorage.setItem("userNumber", JSON.stringify(i));
                condition1 = false;
                localStorage.setItem("logincon",JSON.stringify(true));
                window.location.href = "mainPage.html"
                break;
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
    var userToDo = JSON.parse(localStorage.getItem("userToDo"));
    var userTitle= JSON.parse(localStorage.getItem("userTitle"));
    var toDoCondition = JSON.parse(localStorage.getItem("toDoCondition"));
    if (condition) {
        var name1 = document.getElementById("userName").value;
        var cemail = document.getElementById("email").value;        
        var condition1 = true;
        for (var i = 0; i < userName.length; i++) {
            if (name1 == userName[i]||cemail == email[i] ) {
                condition1 = false;
                break;
            }
        }
        if (condition1) {
            toDoCondition.push(false);
            userName.push(document.getElementById("userName").value);
            password.push(document.getElementById("pass").value);
            email.push(document.getElementById("email").value);
            fullName.push(document.getElementById("fullName").value);
            userToDo.push([]);
            userTitle.push([]);
            localStorage.setItem("userTitle", JSON.stringify(userTitle));                        
            localStorage.setItem("toDoCondition", JSON.stringify(toDoCondition));            
            localStorage.setItem("userToDo", JSON.stringify(userToDo));
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
        else {
            alert("UserName Or Email Is Already Taken");
        }
    }
    else {
        toDoCondition = [];
        fullName = [];
        password = [];
        email = [];
        userName = [];
        userToDo = [];
        userTitle = []
        userTitle.push([]);
        localStorage.setItem("userTitle", JSON.stringify(userTitle)); 
        userName.push(document.getElementById("userName").value);
        email.push(document.getElementById("email").value);
        fullName.push(document.getElementById("fullName").value);
        password.push(document.getElementById("pass").value);
        userToDo.push([]);
        toDoCondition.push(false);
        localStorage.setItem("userName", JSON.stringify(userName));
        localStorage.setItem("password", JSON.stringify(password));
        localStorage.setItem("fullName", JSON.stringify(fullName));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("condition", JSON.stringify(true));
        localStorage.setItem("userToDo", JSON.stringify(userToDo));
        localStorage.setItem("toDoCondition", JSON.stringify(toDoCondition));
        condition = JSON.parse(localStorage.getItem("condition"));
        document.getElementById("userName").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("email").value = "";

        alert("Thank You For Signing Up");
    }


}