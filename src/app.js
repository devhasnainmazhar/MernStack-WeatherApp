const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


// HBS and partials path setting
app.set("view engine", "hbs");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);


// public static path
// console.log(path.join(__dirname, "../public"));
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));



// routing
app.get("/", (req, res)=> {
    res.render("index");
})

app.get("/about", (req, res)=> {
    res.render("about");
})

app.get("/weather", (req, res)=> {
    res.render("weather");
})

app.get("*", (req, res)=> {
    res.render("404error", {
        errorMsg : "Oops! Page not found."
    });
})


app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`);
})