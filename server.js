var express = require ("express");

var PORT = process.env.PORT || 8000;

var app = express();


app.use(express.static("public"));


// parse the body as JSON

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// give the server access to the routes
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// this is to start the server to have it begin to listen to client requests
app.listen(PORT, function() {
    // log (server-side) when server is listening
    console.log("server is listening on: http://localhost:" + PORT);
});