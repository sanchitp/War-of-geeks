

var QueModel = require("./QueModel1.js");

var redis=require("redis");

var client=redis.createClient();

var readline =require("readline");

var r1=readline.createInterface({
input: process.stdin,
output: process.stdout
});

r1.question("QuestionId :" ,function(id)
{
	
var ch=QueModel.extractquePath(id);
r1.close();

});


