const express = require("express");
const cors = require('cors');
const { getAllItems } = require("../getAllItems.js");
const { addVideo } = require("../addVideo.js");
const { dropCollection } = require("../dropCollection.js");
const { deleteVideo } = require("../deleteVideo.js");
const { updateTitle } = require("../updateTitle.js");
const { getOriginalTitle } = require("../getOriginalTitle.js");

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
    res.send("Collection deleted succesfully");

})

app.get("/deleteVideo/:collection/:id",async function(req,res){

    await deleteVideo(req.params.collection,req.params.id);
    res.send("Video deleted succesfully")

})

app.get("/updateTitle/:collection/:id/:newTitle",async function(req,res){

    await updateTitle(req.params.collection,req.params.id,req.params.newTitle);
    res.send("Title updated succesfully")

})

app.get("/getOriginalTitle/:collection/:id/:link",async function(req,res){

    await getOriginalTitle(req.params.collection,req.params.id,req.params.link);
    res.send("Uptaded to original title succesfully")

})