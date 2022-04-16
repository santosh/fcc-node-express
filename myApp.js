var express = require('express');
var app = express();
require('dotenv').config()


app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next()
})



let staticPath = __dirname + "/public"


app.use("/public", express.static(staticPath))

app.get("/", (req, res) => {
  formTemplate = __dirname + "/views/index.html"
  res.sendFile(formTemplate)
})

app.get("/json", (req, res) => {
  let message = "Hello json"
  if (process.env.MESSAGE_STYLE && process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase()
  }
  res.json({ "message": message })
})



module.exports = app;
