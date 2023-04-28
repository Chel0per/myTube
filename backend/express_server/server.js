const express = require("express");
const cors = require('cors');
const { getAllItems } = require("../getAllItems.js");
const { addVideo } = require("../addVideo.js")

const app = express();
app.use(cors());

app.get("/getAllItems",async function(req,res){
    
    let playlists = await getAllItems();
    res.send(playlists);

});

app.get("/addVideo/:link/:playlist",async function(req,res){
   
    await addVideo(req.params.link,req.params.playlist);
    res.send(req.params.link);

})

app.listen(3001,() => {
    console.log("Server started on port 3001");
});