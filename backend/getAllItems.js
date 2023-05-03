const mongoose = require("mongoose");
const videoSchema = require("./videoSchema.js");

async function getAllItems () {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });   
   
    let collections = await mongoose.connection.db.listCollections().toArray();

    let collectionsName = collections.map(collection => collection.name);

    collectionsName.sort();

    let items = [];

    for (let collection of collectionsName) {
        const myModel = mongoose.model(collection, videoSchema, collection);
        const collectionItems = await myModel.find();
        items.push(collectionItems);
    }

    let object = {};

    for(let i = 0; i < items.length ; i++){
        object[collectionsName[i]] = items[i];
    } 

    mongoose.connection.close();

    return object;

}

module.exports.getAllItems = getAllItems;