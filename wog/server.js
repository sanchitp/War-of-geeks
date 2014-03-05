var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var exec = require('child_process').exec;
var dirup= __dirname+'/upload';
var spawn = require('child_process').spawn;
var fs=require("fs");
app.use(express.favicon());


app.use(express.logger('dev'));
app.use(express.bodyParser({keepExtensions:true, uploadDir: __dirname+'/public/upload'}));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname, '/'));




app.get("/", function(req, res){
  res.sendfile("index.html");
});

app.post('/upload',function(req,res) {

var val=[];
val=req.files.image.path;
var name="new";

fs.renameSync(req.files.image.path, __dirname+  "/public/upload" + "/" +"copy"+req.files.image.name);

res.send("file uploaded");
r1.close();
});


app.listen(8888);

