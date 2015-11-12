/**
 * Created by Thomas on 11/11/15.
 */
var express = require("express");
var app = express();

var path = require("path");
var bodyParser = require("body-parser");

//var pg = require("pg");
//var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/research_angular';

app.set("port", process.env.PORT || 5050);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({expanded: true}));
//
//
//
//app.get("/*", function(req,res,next){
//    console.log("Here is the asset I needs: " , req.params);
//    var file = req.params[0] || "/assets/views/index.html";
//    res.sendFile(path.join(__dirname, "./public/", file))
//});
//
//app.listen(app.get("port"), function(req,res,next){
//    console.log("Listening on port: " + app.get("port"));
//});

module.exports = app;