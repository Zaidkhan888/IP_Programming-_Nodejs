var express = require('express');
var app = express();
var router = express.Router();

router.get('/',(req,res)=>{
res.get("get is working")
res.send("send res is working");

})

app.use(router);
app.listen(3000, console.log("listening at the port of 3000"));