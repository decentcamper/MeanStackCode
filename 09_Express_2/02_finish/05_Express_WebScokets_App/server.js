
let express  = require('express');
let bodyParser = require('body-parser');
let myApp = express();
let http = require('http').Server(myApp);
let io = require("socket.io")(http);

myApp.use(express.static(__dirname + '/public'));
myApp.use(bodyParser.json());
myApp.use(bodyParser.urlencoded({extended:false}));
console.log(__dirname);

/**
 * Connection String
 * @type {string}
 */

let messages = [
    {name: "Tim", message: "Hi"},
    {name: "Jane", message: "Hola"}

];
myApp.get('/mess' ,function (req,res,next) {
    res.send(messages);
});

myApp.post('/mess', function (req,res) {
    messages.push(req.body);
    io.emit('messageReceived', req.body);

});

io.on('connection', function () {
    console.log("Someone has connected!!!!");
});


let myServer = http.listen(8089, ()=>{
    console.log(`The server is now running on ${myServer.address().port}`)

});
