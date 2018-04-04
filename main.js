// var name = [2,1,3,5,1,5,45,4,5,5,15,1654,654];




// localStorage.setItem("nameList",name);


// var nameList =  localStorage.getItem("nameList");
var condition;
condition = JSON.parse(localStorage.getItem("condition"));
// if (condition) {
//     alert("true111");
// }
localStorage.setItem("condition", JSON.stringify(true));
condition = JSON.parse(localStorage.getItem("condition"));
// if (condition) {
//     alert("true222");
// }

var names = [2, 5, 6, 4, 8, 8, "najam shehzad", 98];
var names1 = [2, 5, 6, 4, 8, 8, "najam butt", 98];

//names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));
localStorage.setItem("names", JSON.stringify(names1));
var storedNames1 = JSON.parse(localStorage.getItem("names12"));
var userNames = ["najamshehzad","mutlib butt","A.Rehman Butt"];
localStorage.setItem("userName",JSON.stringify(userNames));
var getA = JSON.parse(localStorage.getItem("userName"));

// if (typeof (storedNames1) == "object") {
//     alert("yes");
// }
var arr = [2,5,3,4,8,6,8,54]
var  name11 =   _.sum(arr);

//storedNames1 = JSON.parse(localStorage.getItem("names"));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
// var name1 = JSON.