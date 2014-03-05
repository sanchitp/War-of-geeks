var que_model = require("./QueModel1.js");					
					
var readline =require("readline");

var r1=readline.createInterface({
input: process.stdin,
output: process.stdout

});

//r1.question("enter the teamid " ,function(teamid){
	r1.question("Enter question id",function (id)
	{
		r1.question("Enter question path:",function (quepath) {
			r1.question("Enter solution path",function (solpath) {
				
					r1.question("Enter test case",function (tcpath) {
						que_model.addQue(id,quepath,solpath,tcpath);
						
						console.log("fhghhgh");
												
									r1.close();
					});
				
			});
		});
	
 });