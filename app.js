
function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Tanmoy");

/** Global objects in Node:
    In JS , we have global objects defined within window object.
    Like we can call window.console.log() or window.setTimeout()
    or, something like: var message = "hi"; window.message
    But in Node, we don't have window or DOM, so we can't use them.
    Instead, it is defined within global scope. So doing global.console.log()
    is fine. But, for variable scope, global is not defined unlike window.
    So, doing global.message will give us "undefined".
 */

/*  Modules in Node.Here we will try to read a logger.js file to understand concept of modules in node.
    Remember that module might seem global object but it isn't.
 */

console.log(module);

/*require keyword is specific to node to use the exported object/function.*/

const logger = require('./logger');
logger.log("Hey, Tanny Chaks!");
/**
 * Using in-built modules of node.e.g. path, os,http,etc.
 */

//Path module
const path = require('path');

const pathObj = path.parse(__filename);

console.log(pathObj);

//OS module
const os = require('os');

console.log(`Total Memory: ${os.totalmem}`)
console.log(`Free Memory: ${os.freemem}`)

//File System module: It comes with both sync and async functions but it is preferred to use async for non-blocking operation.
//Also, async functions requires a callback to be implemented as seen below
const fs = require('fs');

fs.readdir('./', function (err, files) {
    if (err) console.log(`Error : ${err}`);
    else console.log(files);
})

//EventEmitter

const EventEmitter = require('events');

const Logger = require('./loggerWithEventEmitter');
const loggerEvent = new Logger();

//Register a Listener: 'on' is same as 'addListener' 
loggerEvent.on('messageLogged', (arg) => {
    console.log('Listener Called : ', arg)
});

loggerEvent.logEvent('Tanny Chaks says that node is fun!');

//Http module: though to handle routes in real life we use Express 

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hey, Tanny Chaks!');
        res.end();
    }

    if(req.url === '/api/getName') {
        res.write(JSON.stringify(["Tanmoy", "Chakraborty"]));
        res.end();
    }
});

server.listen(3000)
console.log("Listening on port 3000...");