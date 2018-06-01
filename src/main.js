import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { findDoctors } from './../src/better-doctor.js';
var Promise = require('es6-promise').Promise;


$(document).ready(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();

    let issue = $('#issue').val();
    $('#issue').val("");

    findDoctors(issue)

    .then(function(response) {
      let body = JSON.parse(response);
      // var counter = 0;
      console.log(body.data[1].practices[3].name);
        // body.data.forEach(function(doctor){
          $('.showOutput').text(`The doctors are ${body.data[1].practices[3].name}`);
        // });
    }, function(error) {
      $('.showErrors').append('<li>' + `There was an error processing your request: ${error.message}` + '</li>');
    });


  });
});
