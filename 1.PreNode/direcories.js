const fs = require('fs')

// creating directories
fs.mkdir('NewBorn', () =>{
    fs.readFile('written.md', (err, data) =>{
        fs.writeFile('./NewBorn/newerborn.txt',data, ()=>{})
    })
 })

 //deleting directories
 /**
  * MUst remove its contents beforedleting the directory else an error
  * 
  */

 fs.unlink('./NewBorn/shjfhsfs.js', () =>{// make sure he directory exists 
    fs.rmdir('NewBorn', () =>{
        console.log(' HELLO')
    })
 })