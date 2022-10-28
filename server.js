const express = require("express");
const app = express();
const mongoose=  require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://smartkings:dominionboy9090@atlascluster.3lwgp1j.mongodb.net/dominion");

//create a data schema
const domSchema ={
    title: String,
    content: String,
    university: String
}
const Dom = mongoose.model("Dom", domSchema)





app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); 
})

app.post("/", function (req, res){

    let newDom = new    Dom({
        title:req.body.title,
        content:req.body.content,
        university:req.body.content

    });

    newDom.save();
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server is running on 3000")
});


