require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var moment = require("moment")

var axios = require("axios");
var Spotify = require("node-spotify-api");


var spotify = new Spotify(keys.spotify);
var operation = process.argv[2].toLowerCase();
var thing = process.argv.slice(3).join(" ");

var concertquery = "https://rest.bandsintown.com/artists/" + thing + "/events?app_id=codingbootcamp"

function concertThis () {
    axios.get(concertquery).then(
        function(response) {
            console.log(`${thing} is  playing at ${response.data[0].venue.name}`);
            console.log(`${thing} is playing at ${response.data[0].venue.city}, ${response.data[0].venue.region}, ${response.data[0].venue.country}`);
            // console.log(response.data[0])
            var concertTime = moment(response.data[0].datetime).format("LL");
            console.log(`${thing} is playing on ${concertTime}`)
            
        })

};

function spotifyThisSong () {
    if (thing) {
    spotify.search({type: 'track', query: thing, limit: 1}, function(err, data) {
        if (err) {
            return console.log("error occuerred: " + err)
        }
        // console.log(data.tracks.items[0])
        console.log(`The songs title is: ${data.tracks.items[0].name} \n${thing} was created by ${data.tracks.items[0].artists[0].name} \n${thing} was on released on ${data.tracks.items[0].album.name} \n${data.tracks.items[0].external_urls.spotify}`) 
    })
} else {
    spotify.search({type: 'track', query: "The Sign", limit: 1}, function(err,data) {
        if (err) {
            return console.log("error occuerred: " + err)
        }
        console.log(`The songs title is: ${data.tracks.items[0].name} \n${thing} was created by ${data.tracks.items[0].artists[0].name} \n${thing} was on released on ${data.tracks.items[0].album.name} \n${data.tracks.items[0].external_urls.spotify}`) 

    })
}
};

function movieThis () {
    axios.get(`http://www.omdbapi.com/?t=${thing}&y=&plot=short&apikey=trilogy`).then(
        function(response) {
            console.log(`Title: ${response.data.Title} \n ${response.data.Title} was released on ${response.data.Released} \n ${response.data.Title} is rated ${response.data.imdbRating} on IMDB. \n ${response.data.Title} is rated ${response.data.Ratings[1].Value} on RottenTomatoes \n ${response.data.Title} was created in ${response.data.Country}. \n ${response.data.Title} is in the ${response.data.Language} language. \n PLOT: \n ${response.data.Plot} \n \n ${response.data.Title}'s main actors are: ${response.data.Actors}`)
            // console.log(response.data)
        }
    ).catch(function() {
        console.log("No movie data")
    })
};

function doWhatItSays () {
        fs.readFile("random.txt", "utf8", function(err, data) {
            if (err) {console.log(err)}
            else {
                var doWhatArr = data.split(",")
                operation = doWhatArr[0];
                // console.log(operation);
                thing = doWhatArr[1];
                doIt()
           
            }
        })
    
};



function doIt() {
if (operation !== "do-what-it-says") {
    switch (operation) {
        case "concert-this":
        concertThis()
        break;
        case "spotify-this-song":
        spotifyThisSong()
        break;

        case "movie-this":
        movieThis();
        break;
        
    }
        

} else {
    doWhatItSays()
};
} 

doIt()