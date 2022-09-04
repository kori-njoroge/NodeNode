const fs = require('fs')

const myContent  = fs.readFileSync('README.md'/**the file name/path to file */, 'utf8'/**encoding used in the file */) // reading the file
/**
 * readFileSync method  is used to read contents of a file.
 */
console.log(myContent) 
console.log('haroo')



//writting the file

/**
 *fs.writeFileSync is used
 */

 fs.writeFileSync('written.md'/**The file to write to */, myContent/**content to be written  */)
