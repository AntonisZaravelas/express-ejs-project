// Server with Pure JS

const http = require("http");
const fs = require("fs");
const _ = require("lodash");

// fs stands for file system

const server = http.createServer((req, res) => {

    // lodash

    



    res.setHeader("Content-Type", "text/html");

    // based on where server is, views is one behind ./ and then i'm in the folder

    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-me":
            res.statusCode = 301;
            // get 301 is a permanent redirect 
            res.setHeader("Location", "/about");
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    // send an html file 

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // res.end();
            // or i can just type..

            res.end(data);
        }
    })



});


server.listen(3000, "localhost", () => {
    console.log("Listening for requests on port 3000");
});


// the callback of the server will run every time a request is being made
// in the server.listen we put in a PORT that we want to listen to
// the function in the server.listen is firing when we start listening, so that we know that we are listening for requests

// The CODE is running on the back-end, so we cannot see the console.log on the browser!
// req, and res are objects