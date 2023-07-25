const express = require("express");
const cors = require('cors');
const { addVideo } = require("../addVideo.js");
// const { dropCollection } = require("../dropCollection.js");
const { deleteVideo } = require("../deleteVideo.js");
// const { updateTitle } = require("../updateTitle.js");
// const { getOriginalTitle } = require("../getOriginalTitle.js");
// const { checkPlaylistEmpty } = require("../checkPlaylistEmpty.js");
const { checkPassword } = require("../checkPassword.js")
const { getUser } = require("../getUser.js")

const app = express();
app.use(cors());

app.listen(3001,() => console.log("Server started on port 3001"));

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

// app.delete("/dropCollection/:collection",async function(req,res){

//     try{
//         await dropCollection(req.params.collection);
//         res.status(201).send("Collection droped succesfully!");
//     }
//     catch(error){
//         res.status(400).json({message: error.message});
//     }
    

// })

app.delete("/deleteVideo/:username/:playlistId/:videoId",async function(req,res){

    try{
        await deleteVideo(req.params.username,req.params.playlistId,req.params.playlistId);
        res.status(201).send("Video deleted succesfully!");
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    
})

// app.put("/updateTitle/:collection/:id/:newTitle",async function(req,res){

//     try{
//         await updateTitle(req.params.collection,req.params.id,req.params.newTitle);
//         res.status(201).send("Title updated succesfully!");
//     }
//     catch(error){
//         res.status(400).json({message: error.message});
//     }

// })

// app.put("/getOriginalTitle/:collection/:id/:link",async function(req,res){

//     try{
//         await getOriginalTitle(req.params.collection,req.params.id,req.params.link);
//         res.status(201).send("Title updated succesfully!");
//     }
//     catch(error){
//         res.status(400).json({message: error.message});
//     }

// })