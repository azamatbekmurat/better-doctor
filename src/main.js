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
    let name = $('#name').val();
    $('#name').val("");

    findDoctors(issue, name)

    .then(function(response) {
      let body = JSON.parse(response);
      $('.showOutput').empty();
      var counter = 0;
        body.data.forEach(function(doctor){
          $('.showOutput').append('<li>' + `The doctors name is: ${doctor.practices[0].name}, address: ${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.zip}, phone number: ${doctor.practices[0].phones[0].number}, website: ${doctor.practices[0].website}. Does this doctor accept new patients: ${doctor.practices[0].accepts_new_patients}` + '</li>');

          counter++;
        });
        if (counter == 0) {
          $('.showOutput').append("According to input criteria no doctors found! Try again with a different input");
        }
    }, function(error) {
      $('.showErrors').append('<li>' + `There was an error processing your request: ${error.message}` + '</li>');
    });


  });
});
