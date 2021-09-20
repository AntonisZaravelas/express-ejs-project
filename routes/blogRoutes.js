// blog routes
const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
// creates a new instance of the Router Object

// so here!

router.get("/blogs", (req,res)=>{
    // the result is the array of blogs [{},{},{}]
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render("index",{title: "All Blogs", blogs:result})
    })
    .catch((error)=>{
        console.log(error);
    })
})

// the .sort({createdAt: -1}) is putting them in an order: the most actual on the top, the oldest on the bottom

// POST REQUEST!

// /blogs is the address from the create.ejs in the formn




router.post("/blogs", (req,res)=>{
    // console.log(req.body)
    // the req. body is an object {title: ... , snippet: .... , body: ....}
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect("/blogs")
    })
    .catch(err=>{
        console.log(err);
    })
    // save to save it to the database
})




router.get("/blogs/create", (req,res)=>{
    res.render("create", {title:"Create a new Blog"});
})




// by doing :id it will be variable ,ATTENTION ITS NOT JUST ID!

router.get('/blogs/:id', (req,res)=>{
    // we will find a single document with this id, but first
    // we need to extract it!
    const id = req.params.id;
    Blog.findById(id)
    .then(result=>{
        
        res.render("details", {blog: result, title:"Blog Details"})
    })
    .catch(err=>{
        res.render("404", {title:"Blog Not Found"})
    });
})

// delete request



router.delete("/blogs/:id",(req,res)=>{
    const id = req.params.id;
    // we cannot redirect in delete!
    // we will send some json DATA
    
    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect: "/blogs"});
    })
    .catch(error=>console.log(error))
})


module.exports = router;