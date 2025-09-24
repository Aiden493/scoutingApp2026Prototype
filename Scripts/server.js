var express = require("express");
var path = require("path");

var app = express();
var port = 8080;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Fallback to index.html for SPA routing
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, function () {
  console.log("Server running on http://localhost:" + port);
});
