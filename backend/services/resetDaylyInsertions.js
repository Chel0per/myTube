const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

async function resetDaylyInsertions(){

    const User = mongoose.model("user", userSchema,"users");

    const users = await User.find();

    for(let user of users){
        user.daylyInsertions = 0;
        await user.save();
    }

}

module.exports.resetDaylyInsertions = resetDaylyInsertions;

