var today = new Date();
var months = ['January','February','March',
              'April','May','June',
              'July','August','September',
              'October','November','December'];
var month = months[today.getMonth()];
var weekday = ['0', '1', '2', '3', '4', '5', '6', '7'];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

var day = weekday[today.getDay()];
var date = today.getDate();
var year = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

let greeting = (hours >= 5 && hours < 11)? "Good Morning" : ((hours >= 12 && hours < 18)? "Good Afternoon" : "Good Evening");

var fullDate =  "Today is " + day + " " + month + " " + date + ", " + year;

document.getElementById("greeting").innerHTML = greeting;
document.getElementById("date").innerHTML = fullDate;

// NOTES
//<br /> Line Break .innerHTML

/*
if (hours >= 5 && hours < 12) {
  document.write("Good morning!");
}
else if (hours >+ 12 && hours < 18) {
  document.write("Good afternoon!");
}
else {
  document.write("Good Evening!");
}
*/

//var fullDate = "Today: " + month + " " + date + ", " + year + " " + "Time: " + hours + ":" + minutes + ":" + seconds;