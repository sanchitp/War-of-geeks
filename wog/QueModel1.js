/* Authors : Akshay Verma
			 Sanchit Pande
			 Vivek Gupta
			 Chandrapratap Prajapati*/

var redis = require('redis');
var client=redis.createClient();

client.on("error",function(err) {
console.log("error : " + err);
});

var queSchema={ 
id : 0,
quepath : 1,
solpath : 2,
tcpath : 3
};

module.exports.addQue = function (id,quepath,solpath,tcpath) {
var key = "queid:"+id;
	client.rpush(key,id ,function (err,data){
		client.rpush(key,quepath ,function (err,data){
			client.rpush(key,solpath ,function (err,data){
				
					client.rpush(key,tcpath ,function (err,data){
						if(!err){
									console.log("successful!!");	
						}else{
										console.log(err);
							}
					});

				
			});
		});
	});
}

module.exports.getQue=function(id) {
var temp;
temp=("queid:"+id);
client.lrange(temp,2,2,function(err,data){

	if(!err){
		console.log("successful");
		console.log(data);
	}
	else{console.log(err);}
});
}


module.exports.extractquePath=function(id){

var temp1;
temp=("queid:"+id);
client.lrange(temp,1,1,function(err,data){

if(!err){
		var qpath=data.toString();
//console.log(qpath);
console.log(qpath);


		}
else{console.log(err);}


});
}
