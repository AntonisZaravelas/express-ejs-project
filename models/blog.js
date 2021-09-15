const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema will define the structure of the document which im gonna use later
// the name of the Schema can be anything! 
// a new instance of a Schema is being created
// different properties inside the schema
// title : { it's gonna be type of a String and it will be required}
// 3 properties, title, snippet and body
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    snippet: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

// timestamp propertie will be defined automatically, every day 
// i update, create a blog document,
// it will autoasign values to this properties automatically


// Schema -> Defines the structure of the document 
// Model -> It's the thing that surrounds the Schema and provides us an interface
// with which we can use to communicate with a DB
// Blog is the model in this case, always with Capital at the beginning
// it's gonna look on the name Blog and look for this connection inside the DB
// it's gonna look for Blogs! -> blogs in the DB 
// blog , it's gonna be the singular(not plural) of blogs!

const Blog =  mongoose.model("Blog", blogSchema);

// exporting Blog 

module.exports = Blog;