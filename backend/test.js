const mongoose = require("mongoose");
const { getAllItems } = require("./getAllItems.js");
const { getAllCollectionsName } = require("./getAllCollectionsName.js");
const { dropCollection } = require("./dropCollection.js");
const { deleteVideo } = require("./deleteVideo.js")
const videoSchema = require("./videoSchema.js");
const { checkPlaylistEmpty } = require("./checkPlaylistEmpty.js");

async function test(){
    
    const Empty = await checkPlaylistEmpty("Xadrez");
    console.log(Empty);

}

test();

// module.exports.test = test;

