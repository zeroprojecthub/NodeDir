 const express = require('express');
 const app = express();
 const path = require('path');
 const port=3000;
app.set("view engine","ejs");
app.set("view",path.join(__dirname,"view"));

app.get("/",(req,res)=>{
   // res.send("Home page");
   res.render("home.ejs");
});

 app.listen(port,()=>{
    console.log(`app is listing on port${port}`);
 })
