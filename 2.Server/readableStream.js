const fs = require('fs')

const myrStream = fs.createReadStream(__dirname + '/elephant.txt', 'utf8')

myrStream.on('data', (chunk) =>{
    console.log('/************New Chunk****************/');
    console.log(chunk)
})
