const express = require("express");
const cors = require('cors');
const { getAllItems } = require("../getAllItems.js");
const { linkToObject } = require("../linkToObject.js")

const app = express();
app.use(cors());

app.get("/getAllItems",async function(req,res){
    
    let playlists = await getAllItems();
    res.send(playlists);

});

app.listen(3001,() => {
    console.log("Server started on port 3001");
});