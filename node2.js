var http = require('http');

var a = http.createServer((req,res)=>{
res.write("hello ji");

})
a.listen(8000 , console.log("server is running on the port 5050"));
