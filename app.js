// This will be like server but by using EXPRESS package
const express = require("express");

// express app
const app = express();

// register view engine, so that express knows that we will use ejs as an express engine
app.set("view engine", "ejs");


// listen for requests

app.listen(3000);


app.get("/", (req,res)=>{
    // status code will be defined automatically (That it's gonna be 200)
    // setHeader will be defined automatically (that it's an HTML)
    // the sendFile takes an absolute path, that's why i put as a 2nd argument
    // the object root, which shows till where it goes, in this case 
    // users/antoniszaravelas/..../NodeJS/views/index.html
    // res.sendFile("/views/index.html", {root: __dirname}); for plain html 

    // for ejs we do : 
    const blogs = [
        {title: "Antonis goes shopping", snippet: "Lorem ipsum Lorem ipsum"},
        {title: "Antonis goes to Ballet", snippet: "Lorem ipsum Lorem ipsum"},
        {title: "Antonis is having breakfast",snippet: "Lorem ipsum Lorem ipsum"}
    ];
    res.render("index", { title: "Home", blogs});
});

app.get("/about", (req,res)=>{
    // status code will be defined automatically (That it's gonna be 200)
    // setHeader will be defined automatically (that it's an HTML)
    res.render("about", {title:"About"});
});

// // redirects in express 

// app.get("/about-us", (req,res)=>{
//     res.redirect("/about");
// });

app.get("/blogs/create", (req,res)=>{
    res.render("create", {title:"Create a new Blog"});
})

// 404 pages

app.use((req,res)=> res.status(404).render("404", {title:"404"}));

// use is firing on every request being made, after having passed all the previous requests
// that i wrote up on my code, that's why i'm also not using any path, because it's firing in every URL
// i must have it on the bottom :D 