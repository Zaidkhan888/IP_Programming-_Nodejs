var fs = require('fs');
var http = require('http');

var a = http.createServer("/home", (req,res)=>{

var data = fs.readFileSync('zaid.txt' )

res.writeHead(200 ,{'Content-type' : 'txt/html'});
res.write(data);
res.end();

res.write("the fs module is running properly")

});
a.listen(8000, console.log("i am listening at the port of 3000"));
