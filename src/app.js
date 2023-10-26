const express = require("express");
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Static Path
const static_path = path.join(__dirname,"../public");

// Template Path and Partials Path

const template_path = path.join(__dirname,"../templates/views");
const template_partials = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path))
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(template_partials);

// Routing
app.get("/",(req, res)=>{
    // res.send("Welcome to my App");
    res.render('index');
});

app.get("/about",(req, res)=>{
    // res.send("This is an about us page");
    res.render('about');
});

app.get("/weather",(req, res)=>{
    res.render("weather");
});

app.get('*',(req, res)=>{
    res.render('404error',{
        errorMsg: 'Unable to Find Page'
    });
})

app.listen(port, ()=>{
    console.log("working");
});