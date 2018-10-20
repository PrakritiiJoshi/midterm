


console.log("The bot begins...");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var username;
var location;


// connecting weather api
const request = require('request');

let apiKey = '...'; 
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


// Setting up a user stream and tracking when someone tweets at the bot
var stream = T.stream('statuses/filter', 
	{ track: ['locationbott'] }
	)

//getting the data
stream.on('message', function (data) {
 //console.log(data);
 username = data.user.screen_name;
 location = data.place.name;
 console.log(location);
 
//responding if specific username tweets the bot
if (username = 'pritijo49720636') {
	
		  var tweet = {
		  	status: '@' + data.user.screen_name + ' thank you for tweeting me!:) ' +  'It is ' + weather.main.temp +  ' degrees in ' + weather.name + ' at ' + Date()
		}

//posting to twitter tweet
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

