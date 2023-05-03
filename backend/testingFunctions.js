const mongoose = require("mongoose");
const { getAllItems } = require("./getAllItems.js");
const { getAllCollectionsName } = require("./getAllCollectionsName.js");
const { dropCollection } = require("./dropCollection.js");
const { deleteVideo } = require("./deleteVideo.js")

async function test(){
    
    await deleteVideo("Música","644ae0e10a80044ea51c4e3a");
    console.log("deletou");

}

test();

