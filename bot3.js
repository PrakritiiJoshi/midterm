//I used this tutorial for reference : https://www.youtube.com/watch?v=ovOtQxLwSzQ&index=7&list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV


console.log("The bot begins...");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var username;
var location;

const request = require('request');

let apiKey = 'b0586b1e5db592a353e53d6a43b78cf0'; 
let city = 'Brooklyn';
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid='+ apiKey;

request(url, function (err, response, body) {
 
  if(err) {

	   console.log('error:', error);
	}

   else {

    	weather = JSON.parse(body);

	}

})


// Setting up a user stream
var stream = T.stream('statuses/filter', 
	{ track: ['locationbott'] }
	)

stream.on('message', function (data) {
 //console.log(data);
 username = data.user.screen_name;
 location = data.place.name;
 console.log(location);
 

if (username = 'pritijo49720636') {
	
		  var tweet = {
		  	status: '@' + data.user.screen_name + ' thank you for tweeting me!:) ' +  'It is ' + weather.main.temp +  ' degrees in ' + weather.name + ' at ' + Date()
		}

T.post('statuses/update',  tweet, tweeted);


}

})


	function tweeted(err, data, response) {
		if (err){
			console.log("Something went wrong!" + err)
		}
		else {
			console.log("It worked!")
		}
	}

