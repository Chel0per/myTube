const mongoose = require("mongoose");

async function getAllPlaylists() {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });
    
    let collections = await mongoose.connection.db.listCollections().toArray();

    let collectionsName = collections.map(collection => collection.name);

    collectionsName.sort();

    await mongoose.connection.close();
    
    return collectionsName;

}

module.exports.getAllPlaylists = getAllPlaylists;