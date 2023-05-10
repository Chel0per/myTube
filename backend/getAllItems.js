const mongoose = require("mongoose");
const videoSchema = require("./videoSchema.js");
const { getAllCollectionsName } = require("./getAllCollectionsName.js");

async function getAllItems () {

    let collectionsName = await getAllCollectionsName();

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });
    
    let items = [];

    for (let collection of collectionsName) {
        const myModel = mongoose.model(collection, videoSchema, collection);
        const collectionItems = await myModel.find();
        items.push(collectionItems);
        mongoose.connection.deleteModel(collection);
    }

    let object = {};

    for(let i = 0; i < items.length ; i++){
        object[collectionsName[i]] = items[i];
    } 

    await mongoose.connection.close();

    return object;

}

module.exports.getAllItems = getAllItems;