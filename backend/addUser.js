const mongoose = require("mongoose");
const userSchema = require("./schemas/userSchema");

async function addUser(username,password) {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeuserDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const object = {
        username:username,
        password:password,
        adminUser:false,
        playlists:[]
    };

    const User = mongoose.model(user,userSchema);
    const newUser = new User(object);

    await newUser.save();

    mongoose.connection.close();
     
}

module.exports.addUser = addUser;