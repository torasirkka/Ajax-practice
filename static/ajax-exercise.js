"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // console.log("inside showFortune function")
    $.get('/fortune', (response) => {
        // console.log("in the jQuery call to /fortune route")
    $('#fortune-text').html(response);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault(); // prevent default behavior(loading HTML page) of event object

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()}; // create dictionary with user form input zipcode as value
    console.log(formData)
    // console.log(weather_info)
    $.get(url, (object) => {
    $('#weather-info').text(`Weather today: ${object['forecast']}`);
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
    // decide which kind of AJAX call to make
    // extract temperature from JSON object returned from /weather.json
    

}

$("#weather-form").on('submit', showWeather); // "listen" for event at HTML element and execute function on event




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


