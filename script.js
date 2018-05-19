
var temp;
var tempUnit = "Celsius";
var currentTempC;
var description;

window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
           // alert("success");
    } else {
        alert("Oops, no geolocation support.");
    }
    
    
    $(".tempU").on('click', function () {
        var currentTempUnit = $("#tempunit").text();
        var newTempUnit = currentTempUnit === "Celsius" ? "Fahrenheit" : "Celsius";
        $("#tempunit").text(newTempUnit);
        
        if (newTempUnit === "Fahrenheit") {
            var tempF = Math.round(parseInt($("#temp").text(), '') * 9 / 5 + 32);
            $("#temp").text(tempF + " ");
            
        } else { 
            $("#temp").text(currentTempC + " ");
            
        }
    });

}


function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=' + latitude + '&lon=' + longitude , function(json){

        $("#location").html(json.name + ", " + json.sys.country);
        
        $("#description").html(json.weather[0].main);
        currentTempC = Math.round(json.main.temp *10) / 10;
        //$("#temp").html(json.main.temp);
        $("#temp").text(currentTempC + " ");
        $("#tempunit").text(tempUnit);
        
        
        description = json.weather[0].main;
        if(description === "Clear") {
            $("body").css("background-image", "url(https://user-images.githubusercontent.com/26505095/40268236-9a876766-5b61-11e8-8cfc-30475e80e8be.jpg)");
        } else if (description === "Clouds") {
            $("body").css("background-image", "url(https://user-images.githubusercontent.com/26505095/40268682-b442763e-5b69-11e8-9b8d-9f31f046c108.jpg)");
        } else if (description === "Drizzle") {
            $("body").css("background-image", "url(https://user-images.githubusercontent.com/26505095/40268232-9a2daf82-5b61-11e8-986c-10cc504844eb.jpg)");
        } else if (description === "Rain") {
            $("body").css("background-image", "url(https://user-images.githubusercontent.com/26505095/40268230-99fc51ee-5b61-11e8-8dd5-226dd4be4544.jpg)");
        } else if (description === "Snow") {
            $("body").css("background-image", "url(https://user-images.githubusercontent.com/26505095/40268233-9a43ee96-5b61-11e8-98a4-47de5a34bb20.jpg)");
        } else if (description === "Thunderstorm") {
            $("body").css("background-image", "url(https://user-images.githubusercontent.com/26505095/40268234-9a5a169e-5b61-11e8-801b-8d408db31e8c.jpg)");
        } else if (description === "Mist") {
            $("body").css("background-image", "url(https://user-images.githubusercontent.com/26505095/40268231-9a128bb2-5b61-11e8-8231-c8ca9fd8c1a5.jpg)");
        } else {
            $("body").css("background-image", "url(https://user-images.githubusercontent.com/26505095/40268235-9a70a364-5b61-11e8-85d4-3d5595c2040b.jpg)");
        }
     });
}






    /*Trying out: Converting JSON data into HTML*/

    /*json.forEach(function(val){
    var keys = Object.keys(val);
    html += "<div class = 'weather'>";
    
    keys.forEach(function(key){
        html += "<strong>" + key + "</strong>:" + val[key] + "<br>";
        });
    html += "</div><br>";
    });

    $(".test").html(html);
}
*/





































