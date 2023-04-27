const mongoose = require("mongoose");

async function getAllCollectionsName() {
    
    const db = mongoose.connection.db;

    const collections = await db.listCollections().toArray();

    const collectionsName = collections.map(collection => collection.name);
    
    return collectionsName;

}

module.exports.getAllCollectionsName = getAllCollectionsName;