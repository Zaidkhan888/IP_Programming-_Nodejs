var http = require('http');
var fs = require('fs');
const a = http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('zaid.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html/json'});
    res.write(data);
    return res.end();
  });
});
a.listen(8081 , console.log("this file is running at the port of 8081"));