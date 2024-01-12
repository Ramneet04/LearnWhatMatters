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
so before a route gets executed, so first middleware executes.
<br>
next() =>  their is one problem with middleware that if once the middleware runs so request gets jam so our request will further never reach to route so we need a push called next().
