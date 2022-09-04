const fs  = require('fs')

fs.readFile('written.md', 'utf8', function(err, data){
    console.log(data)
    fs.writeFile('asynWritten.txt', data, (err) =>{
        if(err) throw err;//adapt the syntax 

        
    });
    console.log('Harro, done')
})

// console.log('Harro')