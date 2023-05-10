const mongoose = require("mongoose");
const videoSchema = require("./videoSchema.js");

async function checkPlaylistEmpty(collection){

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });
    
    const myModel = mongoose.model(collection, videoSchema, collection);
    const collectionItems = await myModel.find();
    mongoose.connection.deleteModel(collection);

    if (collectionItems.length === 0) {
        
        await mongoose.connection.close(true);
        return true;
        
    }
    
    await mongoose.connection.close(true);
    return false;

}

module.exports.checkPlaylistEmpty = checkPlaylistEmpty;