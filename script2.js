const express = require('express')
const app = express()

app.set("view engine", "ejs");

app.use(express.static('./public'))

app.use(function(req, res, next){
  console.log("middleware working")
  next();
})

app.get('/', function (req, res) {
  res.render("index",{COMPANY:"RAMNEET"})
})

app.get("/error",function(req,res,next){
  throw new Error("Error from server sider")
})
app.get('/contact', function (req, res) {
  res.render("contact")
})
app.get('/profile/:username', function (req, res) {
  res.send(`Hello from ${req.params.username}`)
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000,()=>{
    console.log("Server is lsitening at 3000 port no.");
})