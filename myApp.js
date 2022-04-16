let express = require("express");
let bodyParser = require("body-parser")
let app = express();
require("dotenv").config()


app.use(bodyParser.urlencoded({ extended: false }))

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

app.get("/now", (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({ time: req.time })
})

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word })
})

app.get("/name", (req, res) => {
  let name = req.query.first + " " + req.query.last
  res.json({ name: name })
}).post("/name", (req, res) => {
  let name = req.body.first + " " + req.body.last
  res.json({ name: name })
})

module.exports = app;
