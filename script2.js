const express = require('express')
const app = express()

app.use(function(req, res, next){

})

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/profile', function (req, res) {
  res.send('Hello Profile')
})

app.listen(3000,()=>{
    console.log("Server is lsitening at 3000 port no.");
})