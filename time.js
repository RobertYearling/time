var today = new Date();
var months = ['January','February','March',
              'April','May','June',
              'July','August','September',
              'October','November','December'];
var month = months[today.getMonth()];
var day = today.getDate();
var year = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

let greeting = (hours >= 5 && hours < 12)? "Good Morning" : ((hours >+ 12 && hours < 18)? "Good Afternoon" : "Good Evening");

/*
if (hours >= 6 && hours < 12) {
  document.write("Good morning!");
}
else if (hours >+ 12 && hours < 18) {
  document.write("Good afternoon!");
}
else {
  document.write("Good Evening!");
}
*/

var fullDate =  greeting + " - " + "Today is: " + month + " " + day + ", " + year;
//var fullDate = "Today: " + month + " " + day + ", " + year + " " + "Time: " + hours + ":" + minutes + ":" + seconds;

document.getElementById("date").innerHTML = fullDate;
