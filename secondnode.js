
const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send(`<h4> this is zaid khan here</h4>`);
});

app.get("/file", (req, res) => {
  res.send(`this is file`);
});

  app.get("/about", (req, res) => {
  res.send("this is about page");
});
  
const PORT = 5000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));