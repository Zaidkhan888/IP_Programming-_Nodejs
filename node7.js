var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/eg";

MongoClient.connect(url ,function(err, db){
const obj1 = {name : "ayan" }
if(err) throw err;
else
var dbo = db.db("zaid1")
dbo.createCollection("zaidcollection1" , (err,data) => {
if(err)
console.log(err)
console.log("collection created successfully"); 
}
);
dbo.collection("zaidcollection1").insertOne(obj1 , function(err, data){
if(err)
console.log(err)
db.close()
})
console.log("connected Succesfully");
})