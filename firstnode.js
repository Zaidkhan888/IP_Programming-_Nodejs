var http = require('http');


const a = http.createServer(function (req, res) {
  res.write('Hello World1111 \n'); 
res.write(`<h1> this is zaid khan</h1>`);
  res.end();  //always need to end the response
});

 //the server object listens on port 8080
a.listen(8080 , console.log("server running at the port 8080"));
              