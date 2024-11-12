const express = require("express");
const cors = require("cors");
const md5 = require("md5");
const cron = require("node-cron");
const mongoose = require("mongoose");
const { addVideo } = require("../services/addVideo.js");
const { deletePlaylist } = require("../services/deletePlaylist.js");
const { deleteVideo } = require("../services/deleteVideo.js");
const { updateTitle } = require("../services/updateTitle.js");
const { getOriginalTitle } = require("../services/getOriginalTitle.js");
const { checkValidLink } = require("../services/checkValidLink.js");
const { getUser } = require("../services/getUser.js");
const { getUserHash } = require("../services/getUserHash.js");
const { addUser } = require("../services/addUser.js");
const { resetDaylyInsertions } = require("../services/resetDaylyInsertions.js");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
// const connectionString = process.env.DB_URI;

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB").then( () =>{
    console.log("Connected to MongoDB");
    app.listen(PORT, async () => {   
        console.log(`Server started on port ${PORT}`);
    });
});

cron.schedule('0 0 * * *', () => {
    console.log('Running a job at 00:00 at America/Sao_Paulo timezone');
    resetDaylyInsertions();
},{
    scheduled: true,
    timezone: "America/Sao_Paulo"
});

app.get("/", function (req,res){

    res.send({status:"This definitelly is an API"})

})

app.post("/loginValidate/:username", async function(req,res){

    try{
        let user = await getUser(req.params.username);
        if(!user) res.send({status:"Unvalid user"});
        else{
            let hash = await getUserHash(req.params.username);
            if(hash !== md5(req.body.password)) res.send({status:"Incorrect password"});
            else res.send(user);
        }
    }
    catch(error){
        res.status(400).json({message: error.message}); 
    }  

})

app.get("/getUser/:username", async function(req,res){

    try{;
        let user = await getUser(req.params.username);
        res.send(user);
    }
    catch(error){
        res.status(400).json({message: error.message}); 
    }  

})

app.post("/createUser",async function(req,res){

    try {
        let user = await getUser(req.body.username);
        if(!user){
            await addUser(req.body.username,md5(req.body.password));
            res.status(201).send({status:"User created succesfully!"});
        }
        else{
            res.status(400).send({status:"Username already being used!"});
        }
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

})

app.post("/addVideo",async function(req,res){

    try {
        let validation = checkValidLink(req.body.link);
            if(validation === false){
                res.status(400).send({status:"Invalid link!"});
            }
            else{
                let validatedId = validation;
                let user = await getUser(req.body.username);
                if(user.daylyInsertions >= 10){
                    res.status(400).send({status:"Max dayly insertions reached!"});
                }
                else{
                    await addVideo(validatedId,req.body.playlist,user);
                    res.status(201).send({status:"Video added succesfully!"});
                }
            }   
        }
        
    catch(error) {
        res.status(400).json({message: error.message});
    }

})

app.delete("/deletePlaylist/:username/:playlistId",async function(req,res){

    try{
        if(await deletePlaylist(req.params.username,req.params.playlistId)){
            res.status(201).send({status:"Playlist deleted succesfully!"});
        }
        else
        {
            res.status(400).send({status:"Playlist not found!"});
        }
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    
});


app.delete("/deleteVideo/:username/:playlistId/:videoId",async function(req,res){

    try{
        if(await deleteVideo(req.params.username,req.params.playlistId,req.params.videoId)){
            res.status(201).send({status:"Video deleted succesfully!"});
        }
        else
        {
            res.status(400).send({status:"Video not found!"});
        }
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    
});

app.put("/updateTitle/:username/:playlistId/:videoId",async function(req,res){

    try{
        await updateTitle(req.params.username,req.params.playlistId,req.params.videoId,req.body.newTitle);
        res.status(201).send({status:"Title updated succesfully!"});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

});

app.put("/getOriginalTitle/:username/:playlistId/:videoId",async function(req,res){

    try{
        await getOriginalTitle(req.params.username,req.params.playlistId,req.params.videoId);
        res.status(201).send({status:"Title updated succesfully!"});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

});

app.post("/resetDaylyInsertions",async function(req,res){

    try{
        await resetDaylyInsertions();
        res.status(201).send({status:"Dayly Insertions Reseted!"});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

});