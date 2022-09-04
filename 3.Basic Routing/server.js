const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {

    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/home.html', 'utf8').pipe(res)
    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res)
    }
    else if(req.url === '/signup'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/signup.html', 'utf8').pipe(res)
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res)
    }

});

myServer.listen(3000, '127.0.0.1')
console.log('Listening to port 3000')