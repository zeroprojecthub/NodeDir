const express = require('express');
const app = express();
const path = require("path");
const ejs = require('ejs');


const port = 3000;
app.set("view engine", "views");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
   // res.send("Home page ");
   let random = Math.floor(Math.random() * 6 + 1);
   res.render("home.ejs", { num: random });
});

app.get("/ig/:username", (req, res) => {
console.log(req.params);
   let { username } = req.params;
   res.render("instagram.ejs", { username });
})

app.listen(port, () => {
   console.log(`app is listing on port${port}`);
})
