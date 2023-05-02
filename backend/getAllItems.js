const mongoose = require("mongoose");
const { getAllCollectionsName } = require("./getAllCollectionsName.js");
const videoSchema = require("./videoSchema.js");

async function getAllItems () {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });   
   
    let collectionsName = await getAllCollectionsName();

    let items = [];

    for (let collection of collectionsName) {
        console.log(collection);
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