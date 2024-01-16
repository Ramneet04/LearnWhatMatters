<h1>Learning about express and node.js</h1>

1. what and why backend
2. node js install
3. import and export in js
4. run the code
5. npm usage, package
6. express
7. a bit of middlewares

<h3>Node vs Express</h3>
node is the main thing and with the help of express we can create a server and how server will react is done by server only.
<br>
express is more easier to code in comparrison to HTTP express converts itself to https and nodejs use it.
<br>
node use HTTP to make server but we use express as it is more easier to code so we use express and express converts itself to HTTP which further make server to node.js.
<br>
express at the end use HTTP and has more features than HTTP. 
<br>
<h3>What exactly express.js is? and why express?</h3>
express js is package, helps to do routing, server management and many more things.
<br>
Express.js is a minimal and flexible Node.js web application framework that provides a robust set.
<br>
express behind the scene use HTTP.
express has shorter code and easier to understand.
http is difficult to use, express makes this easier.
<br>
<h3>Routing?</h3>
process of makking routes called routing. 
<br>
/profile, /home, /contact/ramneet.
<br>
<h3>Middleware</h3>
middleware is a function which gets executes before the route, means if you want to do any task before the route so you can use the middleware.
<br>
if you want to keep track of the hits or any other task before it hit the route.
<br>
so before a route gets executed, middleware gets executed first.
<br>
<h3>Req, Res, Next</h3>
1. next() =>  their is one problem with middleware that if once the middleware runs so request gets jam so our request will further never reach to route so we need a push called next(). Control itself will not go to other route or middleware so it needs a push.
<br>
<br>
2. req => user's data who request, like user's location, device, ip address and other things.
<br>
<br>
3. res => server send response what to show when particular url hits. We are server we send what to show to the user when and route Hits. Res has controls on basis of these controls we or server send the response.
<br>
<h3>Route Params</h3>
to make any route dynamic you can use :(name of variable) at the place where you want to make it dynamic, and to access there value use req.params.(name of variable)
<br>
<h3>Template Engines</h3>
style of markup which converts into html.
<br>
Ejs is is type of template engines.
<br>
Ejs is very very similar to html.
<br>
<h3>Ejs</h3>
1. ejs install => npm i ejs
<br>
2. configure ejs => app.set("view engine", "ejs");
<br>
3. make folder named views
<br>
4. make ejs files
<br>
5. render instead of send
<br>
<h3>Static Files</h3>
Setting up the images, stylesheets, frontend js.
<br>
1. create a folder called public
<br>
2. create three folders inside it images, stylesheets, javascripts
<br>
3. configure the express static in index.js file or script.js, (mine is sript2.js)
<br>
4. understand the path
<br>
<h3>Error Handling</h3>
learned about how express handle error using app.use method.
