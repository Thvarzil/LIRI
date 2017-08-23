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
})

//Stores command line command in command var
var command = process.argv[2];

function userInput(){
    if(command==="my-tweets"){

    }
    if(command==="spotify-this-song"){

    }
    if(command==="movie-this"){

    }
    if(command==="do-what-it-says"){

    }
    else{
        console.log("The command you entered was not understood. Please Enter one of the following commands:");
        console.log("--> my-tweets : Displays the last 20 tweets you have posted");
        console.log("--> spotify-this-song 'song title' : Displays Spotify info on the entered song");
        console.log("--> movie-this 'movie title' : Displays IMDb info on selected movie. If no title is entered, defaults to Mr. Nobody")
        console.log("--> do-what-it-says : Uses the contents of random.txt as the inputted command");
    }
}

userInput();