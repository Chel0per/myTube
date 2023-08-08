function checkValidLink(input){
    let index = input.indexOf("youtube.com/watch");
    if(index < 0 || input.length < 31 || index + 31 > input.length) return false;
    else{
        let id = input.slice(index + 20, index + 31);
        return id;
    }
}

module.exports.checkValidLink = checkValidLink;