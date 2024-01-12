// figlet a npm package..
// var figlet = require("figlet");

// figlet("Ramneet", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//     console.log(err);
//   });


// express is a framework for node.js
// express is used for => routing
// routing => https://www.facebook.com/profile/ramneet
// here /profile/ramneet is a route
// TYPES => MAIN ARE :- (GET POST) AND THESE ARE MORE ROUTES TYPES :- PUT PATCH DELETE

const express = require('express')
//we called express and all pwers of express is transfered pr lets say access of pwers given to app, now app can do or perform any express methods
const app = express();

app.use(function(req, res, next){
    console.log("hello from middleware");
    next();
});

app.use(function(req, res, next){
    console.log("hello from middleware 2");
    next();
});

app.get("/",function(req,res){
    res.send("Hey !!! I am at port no. 3000 and / route");
})
app.get("/profile",function(req,res){
    res.send("Profile route !!!");
})

app.listen(3000,()=>{
    console.log("server is listening at : 3000 port no.")
});