const fs = require("fs");
const http  = require('http')

const myServer = http.createServer((req,res) =>{
    console.log(`Request was made from  ${req.url}`)
    res.writeHead(200,{'Content-Type' : 'application/json'})
    const myObj ={
        name : 'Kori',
        age : '43',
        car: 'Benz'
    }
res.end(JSON.stringify(myObj))

})


myServer.listen(3000, '127.0.0.1')