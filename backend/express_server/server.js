const express = require("express");
const cors = require("cors");
const cron = require("node-cron");
const mongoose = require("mongoose");
const { addVideo } = require("../services/addVideo.js");
const { deletePlaylist } = require("../services/deletePlaylist.js");
const { deleteVideo } = require("../services/deleteVideo.js");
const { updateTitle } = require("../services/updateTitle.js");
const { getOriginalTitle } = require("../services/getOriginalTitle.js");
const { checkValidLink } = require("../services/checkValidLink.js");
const { checkPassword } = require("../services/checkPassword.js");
const { getUser } = require("../services/getUser.js");
const { addUser } = require("../services/addUser.js");
const { resetDaylyInsertions } = require("../services/resetDaylyInsertions.js");
const secrets = require("../secret.json")

const app = express();
app.use(cors());

mongoose.set("strictQuery",false);
const connectionString = "mongodb+srv://marcelosmarques7:" + secrets.cluster_password + "@clustermytube.0twkb1v.mongodb.net/mytubeDB";

app.listen(3001,async() => {
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Server started on ClusterMyTube");
});

cron.schedule('0 0 * * *', () => {
    console.log('Running a job at 00:00 at America/Sao_Paulo timezone');
    resetDaylyInsertions();
},{
    scheduled: true,
    timezone: "America/Sao_Paulo"
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

app.post("/createUser/:username/:password",async function(req,res){

    try {
        let user = await getUser(req.params.username);
        if(!user){
            await addUser(req.params.username,req.params.password);
            res.status(201).send({status:"User created succesfully!"});
        }
        else{
            res.status(201).send({status:"Username already being used!"});
        }
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

})

app.post("/addVideo/:link/:playlist/:username",async function(req,res){

    try {
        let validation = checkValidLink(req.params.link);
            if(validation === false){
                res.status(201).send({status:"Invalid link!"});
            }
            else{
                let validatedId = validation;
                let user = await getUser(req.params.username);
                if(user.daylyInsertions >= 10){
                    res.status(201).send({status:"Max dayly insertions reached!"});
                }
                else{
                    await addVideo(validatedId,req.params.playlist,req.params.username);
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
        await deletePlaylist(req.params.username,req.params.playlistId);
        res.status(201).send({status:"Playlist deleted succesfully!"});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    
});


app.delete("/deleteVideo/:username/:playlistId/:videoId",async function(req,res){

    try{
        await deleteVideo(req.params.username,req.params.playlistId,req.params.playlistId);
        res.status(201).send({status:"Video deleted succesfully!"});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    
});

app.put("/updateTitle/:username/:playlistId/:videoId/:newTitle",async function(req,res){

    try{
        await updateTitle(req.params.username,req.params.playlistId,req.params.videoId,req.params.newTitle);
        res.status(201).send({status:"Title updated succesfully!"});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

})

app.put("/getOriginalTitle/:username/:playlistId/:videoId",async function(req,res){

    try{
        await getOriginalTitle(req.params.username,req.params.playlistId,req.params.videoId);
        res.status(201).send({status:"Title updated succesfully!"});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

})