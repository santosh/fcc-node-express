var express = require('express');
var app = express();


let staticPath = __dirname + "/public"

app.use("/public", express.static(staticPath))







app.get("/", (req, res) => {
  formTemplate = __dirname + "/views/index.html"
  res.sendFile(formTemplate)
})























module.exports = app;
