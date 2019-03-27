# liri-node-app

The goal of this LIRI-node-app is to take commands in from the commandline and output relevant concert, movie, or song information.

the user should be able to navigate to the files in their git commandline and run the file.

to run a user will type in "node liri.js <action> <thing>"

the available actions are:
movie-this
concert-this
spotify-this-song
do-what-it-says


the user gets to decide on anything in the place of thing.

If the user uses the action "movie-this" and provides a movie title in the place of <thing> information about the movie should be logged to the git commandline. It should log: title, release date, imdb rating, rotten tomatoes rating, where it was produced, and the languages it is available in, the primary actors/actresses, and a short summary of the plot.

If the user uses the action "concert-this"  and provides a band name in the place of <thing> it will contact bandsintown to gather information and display the soonest concert of the band and display what venue and what city,state,country it is in.

If the user uses the action "spotify-this-song" and provides a song title in the place of <thing> information (that spotify has) is sent to and displayed on the screen. it contains the track title, the artist, when it was released, and lastly a url for a sample of the track.


if the user uses the action "do-what-it-says" and provides no <thing> in the command line the app should look in the "random.txt" file and determine its action and thing and follow the processes for the action and thing listed in there.
