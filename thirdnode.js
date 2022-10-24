const fs = require('fs')


const data = fs.readFileSync('zaid.txt')

// const data1 = fs.readFileSync('zaid.txt', (err, data) =>{
// if(err) throw err; 
console.log(data); //buffer value is deisplay
console.log("hello world")
// });