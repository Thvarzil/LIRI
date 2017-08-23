//Stores twitter keys from keys.js into a variable

//Require keys.js
const keys = require('./keys.js');

//stores keys in twitKeys
var twitKeys = keys.twitterKeys;

//Require and set up spotify API
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: "746610783bb24eaebef0335184e3586a",
    secret: "21c1ad91a898400d87c76fec1a088a53"
});

//require request package for OMDb scraping
var request = require("request");

//require file structure package
var fs = require("fs");

//Stores command line command in command var
var command = process.argv[2];

function userInput() {
    if (command === "my-tweets") {
        console.log("Your 20 most recent tweets:");

    }
    else if (command === "spotify-this-song") {
        console.log("Song Info:");
    }
    else if (command === "movie-this") {
        console.log("Movie Info:");

    }
    else if (command === "do-what-it-says") {
        var randText;
        fs.readFile('./random.txt', function (err, data) {
            if (err) throw err;
            console.log(data);
            randText = JSON.stringify(data);
            console.log("The command from random.txt was: " + randText);
        });
    }
    else {
        console.log("The command you entered was not understood. Please Enter one of the following commands:");
        console.log("--> my-tweets : Displays the last 20 tweets you have posted");
        console.log("--> spotify-this-song 'song title' : Displays Spotify info on the entered song");
        console.log("--> movie-this 'movie title' : Displays IMDb info on selected movie. If no title is entered, defaults to Mr. Nobody");
        console.log("--> do-what-it-says : Uses the contents of random.txt as the inputted command");
    }
}

userInput();