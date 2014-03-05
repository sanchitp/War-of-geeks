/* Authors : Akshay Verma
			 Sanchit Pande
			 Vivek Gupta
			 Chandrapratap Prajapati*/

var QueModel = require("./QueModel1.js");					
var readline =require("readline");

var r1=readline.createInterface({
input: process.stdin,
output: process.stdout
});

r1.question("Question Id : " ,function(id)
{
	QueModel.getQue(id);
		
	r1.close();
		
});
