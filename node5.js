var http = require("http");
var fs = require('fs');

http.createServer("/",(req,res)=>{
//res.write("hello world');
var data = fs.readFileSync('hello.txt')
res.writeHead(200, {'content-Type': 'text/html'})

res.write(data)
console.log(data);


}).listen(3000)