const express = require("express");
const cors = require('cors');
const { getAllItems } = require("../getAllItems.js");
const { addVideo } = require("../addVideo.js");
const { dropCollection } = require("../dropCollection.js");
const { deleteVideo } = require("../deleteVideo.js");
const { updateTitle } = require("../updateTitle.js");
const { getOriginalTitle } = require("../getOriginalTitle.js");
const { checkPlaylistEmpty } = require("../checkPlaylistEmpty.js");

const app = express();
app.use(cors());

app.listen(3001,() => console.log("Server started on port 3001"));

app.get("/getAllItems",async function(req,res){
    
    try{
        let Items = await getAllItems();
        res.send(Items);
    }
    catch(error){
        res.status(400).json({message: error.message}); 
    }

});

app.get("/checkPlaylistEmpty/:playlist",async function(req,res){
    
    try{
        let Empty = await checkPlaylistEmpty(req.params.playlist);
        res.send(Empty);
    }
    catch(error){
        res.status(400).json({message: error.message}); 
    }

});

app.post("/addVideo/:link/:playlist",async function(req,res){
   
    try {
        await addVideo(req.params.link,req.params.playlist);
        res.status(201).send("Video added succesfully!");
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }

})

app.delete("/dropCollection/:collection",async function(req,res){

    try{
        await dropCollection(req.params.collection);
        res.status(201).send("Collection droped succesfully!");
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    

})

app.delete("/deleteVideo/:collection/:id",async function(req,res){

    try{
        await deleteVideo(req.params.collection,req.params.id);
        res.status(201).send("Collection droped succesfully!");
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    
})

app.put("/updateTitle/:collection/:id/:newTitle",async function(req,res){

    try{
        await updateTitle(req.params.collection,req.params.id,req.params.newTitle);
        res.status(201).send("Title updated succesfully!");
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

})

app.put("/getOriginalTitle/:collection/:id/:link",async function(req,res){

    try{
        await getOriginalTitle(req.params.collection,req.params.id,req.params.link);
        res.status(201).send("Title updated succesfully!");
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

})