const mongoose = require("mongoose");

async function getAllCollectionsName() {

    let collections = await mongoose.connection.db.listCollections().toArray();

    let collectionsName = collections.map(collection => collection.name);

    collectionsName.sort();
    
    return collectionsName;

}

module.exports.getAllCollectionsName = getAllCollectionsName;