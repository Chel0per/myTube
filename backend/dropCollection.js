const mongoose = require("mongoose");

async function dropCollection(collection){

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });

    await mongoose.connection.db.collection(collection).drop();

    mongoose.connection.close();

}

module.exports.dropCollection = dropCollection;