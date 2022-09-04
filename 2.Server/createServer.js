const http = require ('http')

const server = http.createServer(function(req,res){
    console.log(`Request was made: ${req.url}`)
    res.writeHead(200,{'Content-Type' : 'text/plain'});// writting the head 
    res.end('Hey Ninjas')
});

server.listen(3000, '127.0.0.1')//The port the server should listen to and the Ip address of the host device

console.log('We are listening to port 3000');