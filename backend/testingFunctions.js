const mongoose = require("mongoose");
const { getAllItems } = require("./getAllItems.js");
const { getAllCollectionsName } = require("./getAllCollectionsName.js");
const { dropCollection } = require("./dropCollection.js");

async function test(){
    
    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });
    
    // await dropCollection("Anime");

    let names = await getAllCollectionsName();

    mongoose.connection.close();
    
    console.log(names);
}

test();

