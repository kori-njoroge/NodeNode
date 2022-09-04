const fs = require("fs");

const myReadStream = fs.createReadStream(__dirname + "/elephant.txt",'utf8')
const myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt")

// myReadStream.on('data', (chunk) =>{
//     console.log('chunk is received ')
//     myWriteStream.write(chunk)
// })


//Piping 
myReadStream.pipe(myWriteStream);


