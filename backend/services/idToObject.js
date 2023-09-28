require("dotenv").config();

async function idToObject(id){

    let apiUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + id + "&fields=items(id%2Csnippet)&key=" + process.env.API_URL_KEY;
    
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