const express = require("express");
const cors = require('cors');
const { getAllItems } = require("../getAllItems.js");
const { addVideo } = require("../addVideo.js");
const { dropCollection } = require("../dropCollection.js");

const app = express();
app.use(cors());

app.get("/getAllItems",async function(req,res){
    
    res.send(await getAllItems());

});

app.get("/addVideo/:link/:playlist",async function(req,res){
   
    await addVideo(req.params.link,req.params.playlist);
    res.send("Video added successfully")

})

app.listen(3001,() => {
    console.log("Server started on port 3001");
});

app.get("/dropCollection/:collection",async function(req,res){

    await dropCollection(req.params.collection);
    console.log("Collection deleted succesfully");
    res.send("Collection deleted succesfully");

})