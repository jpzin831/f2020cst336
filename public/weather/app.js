$(document).ready(function(){

    $('#submitLocation').click(function(){

        //get value from input field
        var city = $("#city").val();

        //check not empty
        if (city != ''){

            $.ajax({

                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=b2c5f81b0eace9dc63c222f22c6ebb2f",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log(data);
                    console.log(data.weather[0].main);
                    console.log(data.main);
                    console.log(data.main.temp);
                    console.log(data.main.humidity);

                    var information = show(data);
                    $("#show").html(information);
                if(data.weather[0].main == 'Clouds' ){
                  document.body.style.backgroundImage = "url(img/cloudy.jpg)";
                  document.body.style.backgroundRepeat="no";

                }
                if(data.weather[0].main == 'Clear' ){
                  document.body.style.backgroundImage = "url(img/clear.jfif)";
                  document.body.style.backgroundRepeat="no";

                }
                if(data.weather[0].main == 'Rain' ){
                  document.body.style.backgroundImage = "url(img/rain.jpg)";
                  document.body.style.backgroundRepeat="no";

                }

                }
            });

        }else{
            $('#error').html('Field cannot be empty');
        }

    });
})


function show(data){
    return  "<h3>Current Weather: "+ data.main.temp +"°F</h3>" + "<h3>Overcast: "+ data.weather[0].main +"</h3>" + "<h3>Humidity: "+ data.main.humidity +"</h3>";

}
