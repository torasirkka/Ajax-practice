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

    let url = '/weather.json';
    let formData = {'zipcode': $('#zipcode-field').val()}; // create dictionary with user form input zipcode as value
    
    $.get(url, formData, (object) => {
    $('#weather-info').text(`Weather today: ${object['forecast']}`);
    });
}

$('#weather-form').on('submit', showWeather); // "listen" for event at HTML element and execute function on event


// PART 3: ORDER MELONS

const update_ordermelons = (res) => {
    if (res.code === 'OK') {
        $('#order-status').html(`<p>${res.msg}</p>`)
    }
    else {
        $('#order-status').html(`<p><b>${res.msg}</b></p>`)
        .addClass('order-error')
    };
}


function orderMelons(evt) {
    evt.preventDefault();

    const formData = {
        'melon_type' : $('#melon-type-field').val(),
        'qty' : $('#qty-field').val()
        };

        $.post('/order-melons.json', formData, update_ordermelons)
}

$('#order-form').on('submit', orderMelons);


