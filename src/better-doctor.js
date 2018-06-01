import $ from 'jquery';
var Promise = require('es6-promise').Promise;

export function findDoctors(issue, name) {

  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=wa-seattle&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    console.log(url);

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }

    request.open("GET", url, true);
    request.send();

  })
}
