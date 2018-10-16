console.log("The bot begins...");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);




let request = require('request');

var apiKey = 'b0586b1e5db592a353e53d6a43b78cf0'; 
var city = 'Columbus';
var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey;


var weather;

var tweet;

request(url, function (err, response, body) {
 
  if(err){
	    console.log('error:', error);
	   }

   else {

    weather = JSON.parse(body);
    console.log('body', body);

  	tweet = {
		  	status: 'It is' + weather.main.temp +  ' degrees in ' + weather.name 
		  }

	}
});

T.post('statuses/update',  tweet, tweeted);


	function tweeted(err, data, response) {
		if (err){
			console.log("Something went wrong!")
		}
		else {
			console.log("It worked!")
		}
	}
