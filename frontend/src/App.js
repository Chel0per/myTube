import React, { useState , useEffect } from "react";
import { CSSReset } from "./components/CSSReset/CSSReset"
import Header from "./components/Header/index.js";
import PlaylistView from "./components/PlaylistView/index.js";
import Banner from "./components/Banner/index.js"

function App() {

  const [playlists,setPlaylist] = useState({});
  const [effectCount,setEffect] = useState(0);

  useEffect(() => {
    const loadPlaylists = async () => {
      const response = await fetch("http://localhost:3001/getAllItems");
      const result = await response.json();
      console.log("useEffect Hook activated")
      setPlaylist(result);
    };
    loadPlaylists();
  }, [effectCount]);

  return (
    <CSSReset>
      <Header></Header>
      <Banner></Banner>
      <PlaylistView playlists={playlists} effectCount={effectCount} setEffect={setEffect}></PlaylistView>
    </CSSReset>
  );

}

export default App;
