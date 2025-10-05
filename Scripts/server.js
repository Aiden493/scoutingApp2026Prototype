var express = require("express");// npm install express
var path = require("path");// built-in module

var app = express();// creates an express application
var port = 8080; // you can use any port you prefer


// Serve static files
app.use(express.static(path.join(__dirname, "public"))); // public is the folder with your static files

// Fallback to index.html for SPA routing
app.get("*", function (req, res) {// handles all GET requesta
  res.sendFile(path.join(__dirname, "public", "index.html"));// serves index.html for all routes
});

app.listen(port, function () {// starts the server
  console.log("Server running on http://localhost:" + port); // logs the server address
});
// To run the server, use the command: node server.js
// make sure you have Express installed: npm install express


