var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var request = require('request');


var url = "https://spreadsheets.google.com/feeds/list/1CEbHKEYOVoK85b0lpCvDDGu0heWyWV4nWylNN8iCmRE/1/public/values?alt=json";

console.log("test request");

request(url, function (error, response, body) {
	//console.log(response);
	console.log(body);
	var data = JSON.parse(body);
	console.log(body);

	for (var i = 0; i < data.feed.entry.length; i++) {
			console.log(i);
                   var entry = data.feed.entry[i];

                   var obj = {};
                   obj.link = entry.gsx$link.$t;
                   
                   obj.name = entry.gsx$name.$t;
                   
                   var childArgs = [
					  path.join(__dirname, 'rasterize.js'),
					  obj.link,
					  'app/images/thumb/'+obj.name+".jpg"
					]

				  takeScreenshot(binPath, childArgs);

                   
  	}
});




/*var childArgs = [
  path.join(__dirname, 'rasterize.js'),
  'http://www.lo2k.net',
  'app/images/thumb/res.jpg'
]*/


var takeScreenshot = function(binPath, childArgs)  {
	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
  console.log(stdout);
  console.log(err);
  console.log(stderr);
	});
}

