const { getAllItems } = require("./getAllItems.js");

async function test(){
    let playlists = await getAllItems();
    console.log(playlists);
}

test();

