var city = "60301";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + city + "&units=imperial&appid=58c95dbc9a2ac4ec7a3a692c098cbb5f", function(data){
  var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var weather = data.weather[0].main;
  var temp = "Temp - " + Math.floor(data.main.temp);
  var windspeed = "Wind - " + Math.round(data.wind.speed) + " mph";
  var cityid = data.name;

  $('.icon').attr("src", icon);
  $('.weather').append(weather);
  $('.temp').append(temp);
  $('.windspeed').append(windspeed);
  $('.cityid').append(cityid);
});



$(document).ready(function() {

  //Get Location

  navigator.geolocation.getCurrentPosition(successful, fail);

    function successful(pos) {
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      weather(lat, lon);
    }

    function fail() {
      console.log('error');
    }

  function weather(lat, lon) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=58c95dbc9a2ac4ec7a3a692c098cbb5f', function(results){
      updateDOM(results);
    });

  }


  function updateDOM(results) {

    var currentloc = results.coords;
    var symbol = "http://openweathermap.org/img/w/" + results.weather[0].icon + ".png";
    var conditions = results.weather[0].main;
    var degrees = results.main.temp;
    var wind = results.wind.spped;


    $('.currentloc').html(currentloc);
    $('.symbol').attr("src", symbol);
    $('.conditions').html(conditions);
    $('.degrees').html(degrees);
    $('.wind').html(wind);

  }

})