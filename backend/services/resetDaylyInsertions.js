const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");
require("dotenv").config();

async function resetDaylyInsertions(){

    if (mongoose.connection.readyState === 0){
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to database again");
    } 

    const User = mongoose.model("user", userSchema,"users");

    const users = await User.find();

    for(let user of users){
        user.daylyInsertions = 0;
        await user.save();
    }

}

module.exports.resetDaylyInsertions = resetDaylyInsertions;

