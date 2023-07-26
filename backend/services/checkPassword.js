function checkPassword(user,password){

    if(user.password === password) return true;
    else return false;

}

module.exports.checkPassword = checkPassword;