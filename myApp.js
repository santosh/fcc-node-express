var express = require('express');
var app = express();












app.get("/", (req, res) => {
  formTemplate = __dirname + "/views/index.html"
  res.sendFile(formTemplate)
})























module.exports = app;
