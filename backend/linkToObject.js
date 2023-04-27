const secret = require("./secret.json");

async function linkToObject(input){

    const id = input.slice(input.length -11,input.length);

    apiUrl= secret.api_part1 + id + secret.api_part2 + secret.api_key;
    

    const response = await fetch(apiUrl);
    const data = await response.json();
    const titlev = data.items[0].snippet.title;

    const thumbv = data.items[0].snippet.thumbnails.high.url;

    const linkv = input;

    const object = {
        link:linkv,
        thumb:thumbv,
        title:titlev    
    };

    return object;

}

module.exports.linkToObject = linkToObject;