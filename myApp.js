var express = require('express');
var app = express();


let staticPath = __dirname + "/public"


app.use("/public", express.static(staticPath))

app.get("/", (req, res) => {
  formTemplate = __dirname + "/views/index.html"
  res.sendFile(formTemplate)
})

app.get("/json", (req, res) => {
  res.json({ "message": "Hello json" })
})





















module.exports = app;
