
var jQuery = require("jquery");
var ajax = require("ajax");
//Stores twitter keys from keys.js into a variable

//Require keys.js
const keys = require('./keys.js');

//stores keys in twitKeys
var twitter = keys.twitterKeys;

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

        twitter.get('statuses/user_timeline', {screen_name: 'liri_alias', count: 20}, getData);
        function getData(err, data, response) {
            // if(err) throw err

            for(var i = 0; i<data.length; i++){
                console.log(data[i].text);
                console.log(data[i].created_at);
            }
        }

    }
    else if (command === "spotify-this-song") {

        var songTitle = process.argv[3];

        if(songTitle===""){
            songTitle = "The Sign";
        }


        spotify.search({ type: 'track', query: songTitle }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var results = data.tracks.items.length;
            console.log("Your search returned " + results + " results!");

            for(var i = 0; i<data.tracks.items.length; i++){
                console.log("\bSong Info  :\n");

                console.log("Title      : " + data.tracks.items[i].name);
                // for(var j = 0; j < data.tracks.items[i].artists[j].name){
                console.log("Artist     : " + data.tracks.items[i].album.artists[0].name);
                // }
                console.log("Album      : " + data.tracks.items[i].album.name);
                console.log("Preview URL: " + data.tracks.items[i].preview_url);
                console.log("--------------------------------------------")
            }

        });
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