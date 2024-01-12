
// what and why backend
// node js install
// import and export in js
// run the code
// npm usage, package
// express
// a bit of middlewares

// it a npm package..
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

// middleware is a function which gets executes before the route, means if you want to do any task before the route so you can use the middleware.

// if you want to keep track of the hits or any other task before it hit the route.

// so before a route gets executed, so first middleware executes.

// next() =>  their is one problem with middleware that if once the middleware runs so request gets jam so our request will further never reach to route so we need a push called next().