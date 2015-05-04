var twitter = require('ntwitter')
  , fs = require('fs')
  , express = require('express')
  , tweetscore = 0
  , words = fs.readFileSync('words_clean.txt').toString()
  , wordMap = {}
  , splitWords = words.split("\n")
  , twit = new twitter({
	//    consumer_key: 'oXAbKQyQ47h9CBVXmMGdQ',
  //    consumer_secret: 'z9EqbFpf4dhNuY6M1Eawk3W2dwnt9B1PoQRAMyWtxTU',
  //    access_token_key: '15524875-L916RzSGVMqi1DlZz4MiB7RCgsWhuKSsD9T7Pn5i1',
  //    access_token_secret: 'GLMDBi2NFYl3eZmUZ4zmhphDMozXesMN16DI9NOaIo'

      consumer_key: 'TjrJDt1LJxo77jqltxJqw',
      consumer_secret: 'GmWXn3NwxxwV2bEXsCm2PFEyuNlMCul1NhN62TVLU8',
      access_token_key: '15524875-CyVr19a7cbPMriaEtTf823AxvhB5sfvSFAH3ig7ZY',
      access_token_secret: '4IDx8I20XWbIKu1LyBVmQ7wiArim3iWcRZT36q1P738DA'
});



//put all the words into an object
for(var i = 0; i < splitWords.length; i++){
	var line = splitWords[i]
	var compactLineArr = line.replace(/\s+/g, " ").split(' ')
	var score = compactLineArr[0];
	var word = compactLineArr[1];
	// Assuming that none of our words are reserved words like "prototype"
	wordMap[word] = score
}



//get sentiment
var sentiment = function(tweet){
   console.log("made it to sentiment");
   var score = 0;
	for(var i = 0; i < tweet.length; i++){
			var word = tweet[i];
			if(wordMap[word.toLowerCase()]) {
				console.log("Word: " + word + " / score: " + wordMap[word.toLowerCase()]);
				score += parseFloat(wordMap[word.toLowerCase()]);
			}
 	}
	tweetscore = translate_score(score);
}

var translate_score = function(score){

	if(score < 0){
	
	  if(score > -0.3){
	    return 5; 
	  }
	  else if(score > -0.5){
		return 7;
		}
	  else if(score > -1){
		return 6;
	  
	  }
	  else{
	  	return 4;
	  }
	}
	else{
		if(score < 0.25){
		  
		  return 3; 
		}
		else if(score < 0.75){
		  return 1;
		}
		
		
		else if(score == 0){
		   return 0;
		}
		else if(score < 1.25){
			return 8;}
		else{
			
			return 2;
		}
	
	}
}

	
var tweet_listener = function(){
twit.stream('statuses/filter', { 'follow' : '2236980362'},
	  function(stream) {
	  	stream.on('data', function (data) {
     if(data){
      console.log(data);
      var tweet = data.text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(' ');
			sentiment(tweet);
      }
				}
			)
	  })
}();


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
var app = express();
app.configure(function() {
    app.use(allowCrossDomain);
});
app.get('/happy_score.txt', function(req, res) {  
  console.log("Got request /happy_score.txt: " + tweetscore);
  res.send("" + tweetscore); // needs to be string for some reason?
});

//app.listen(process.env.PORT || 8888);
app.listen(3000);
console.log('Listening on port 3000');
