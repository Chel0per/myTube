let secret = require("../secret.json");

async function idToObject(id){

    let apiUrl = secret.api_part1 + id + secret.api_part2 + secret.api_key;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    let titlev = data.items[0].snippet.title;

    let thumbv = data.items[0].snippet.thumbnails.high.url;

    let linkv = "https://www.youtube.com/watch?v=" + id;

    let object = {
        link:linkv,
        thumb:thumbv,
        title:titlev    
    };

    return object;

}

module.exports.idToObject = idToObject;