var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var path = require("path");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/angular-app/dist' ));

// require the mongoose configuration file which does the rest for us
var mongoose_file = require('./server/config/mongoose.js');
var route_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
route_setter(app)

app.listen(8000, function () {
    console.log("listening on port 8000");
})

