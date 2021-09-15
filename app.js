// This will be like server but by using EXPRESS package
const express = require("express");
const morgan = require("morgan");
// morgan is used for middleware, it's a function of middleware which we can use directly!

// express app
const app = express();

// register view engine, so that express knows that we will use ejs as an express engine
app.set("view engine", "ejs");


// listen for requests

app.listen(3000);

// middleware and static files

app.use(express.static("public"));

// app.use(morgan("dev")); 

// the morgan("dev") is giving informstion about the request, the entry point (200,401,302 etc), how much time was needed etc
// its nothing more than a function which is used with middlewares and gives info about things. there are more function like this!



// middleware here

// app.use((req,res,next)=>{
//     console.log("A new request was made");
//     console.log("host: ", req.hostname);
//     console.log("path: ", req.path);
//     console.log("method: ", req.method)
//     // after express runs the code, it doesn't know how to move on to the next middleware. that's why i have to use next:
//     next();
// })

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