var express = require("express");
var app = express();

app.get('/' , (req,res) =>{
res.cookie('name' , 'zaid' );
res.send("hello world111");

})


app.listen(3000, console.log("listenting at the port of 3000"));