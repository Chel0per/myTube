const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { addVideo } = require("../services/addVideo.js");
const { deletePlaylist } = require("../services/deletePlaylist.js");
const { deleteVideo } = require("../services/deleteVideo.js");
const { updateTitle } = require("../services/updateTitle.js");
const { getOriginalTitle } = require("../services/getOriginalTitle.js");
// const { checkPlaylistEmpty } = require("../checkPlaylistEmpty.js");
const { checkPassword } = require("../services/checkPassword.js")
const { getUser } = require("../services/getUser.js")

const app = express();
app.use(cors());

app.listen(3001,async() => {
    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Server started on port 3001");
});

app.get("/loginValidate/:username/:password", async function(req,res){

    try{
        let user = await getUser(req.params.username);
        if(user === null) res.send({status:"Unvalid user"});
        else{
            if(!checkPassword(user,req.params.password)) res.send({status:"Incorrect password"});
            else res.send(user);
        }
    }
    catch(error){
        res.status(400).json({message: error.message}); 
    }  

})

app.get("/getUser/:username", async function(req,res){

    try{
        let user = await getUser(req.params.username);
        res.send(user);
    }
    catch(error){
        res.status(400).json({message: error.message}); 
    }  

})

// app.get("/getAllItems",async function(req,res){
    
//     try{
//         let Items = await getAllItems();
//         res.send(Items);
//     }
//     catch(error){
//         res.status(400).json({message: error.message}); 
//     }

// });

// app.get("/checkPlaylistEmpty/:playlist",async function(req,res){
    
//     try{
//         let Empty = await checkPlaylistEmpty(req.params.playlist);
//         res.send(Empty);
//     }
//     catch(error){
//         res.status(400).json({message: error.message}); 
//     }

// });

app.post("/addVideo/:link/:playlist/:username",async function(req,res){

    try {
        await addVideo(req.params.link,req.params.playlist,req.params.username);
        res.status(201).send("Video added succesfully!");
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }

})

app.delete("/deletePlaylist/:username/:playlistId",async function(req,res){

    try{
        await deletePlaylist(req.params.username,req.params.playlistId);
        res.status(201).send("Playlist deleted succesfully!");
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    
});


app.delete("/deleteVideo/:username/:playlistId/:videoId",async function(req,res){

    try{
        await deleteVideo(req.params.username,req.params.playlistId,req.params.playlistId);
        res.status(201).send("Video deleted succesfully!");
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    
});

app.put("/updateTitle/:username/:playlistId/:videoId/:newTitle",async function(req,res){

    try{
        await updateTitle(req.params.username,req.params.playlistId,req.params.videoId,req.params.newTitle);
        res.status(201).send("Title updated succesfully!");
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

})

app.put("/getOriginalTitle/:username/:playlistId/:videoId",async function(req,res){

    try{
        await getOriginalTitle(req.params.username,req.params.playlistId,req.params.videoId);
        res.status(201).send("Title updated succesfully!");
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

})