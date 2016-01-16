var express = require("express");
var app = express();
var ECT = require("ect");

var renderer = ECT({ root : __dirname + '/views', ext : '.ect' });
app.set("view engine", "ect");
app.engine('ect', renderer.render);

app.get("/", function(req, res) {
    res.render("index");
});

app.listen(3000, function() {
   console.log("Started");
});