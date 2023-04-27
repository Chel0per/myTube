const express = require("express");
const app = express();
const cors = require('cors');
const { getAllItems } = require("../getAllItems");

app.use(cors());

app.get("/",async function(req,res){
    
    let playlists = await getAllItems();
    res.send(playlists);

});

app.listen(3001,() => {
    console.log("Server started on port 3001");
});