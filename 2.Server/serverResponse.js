const http = require('http')
const fs = require('fs')





const myServer = http.createServer((req,res) =>{
    console.log(`Request was made: ${req.url}`)
    res.writeHead(200,{'Content-Type' : 'text/html'})
    const myReadStream = fs.createReadStream(__dirname + '/response.html','utf8');
    // const myWriteStream = fs.createWriteStream(__dirname + '/response.html', () =>{});

    myReadStream.pipe(res);
});
console.log('We listening to port 3000')
myServer.listen(3000,'127.0.0.1')

