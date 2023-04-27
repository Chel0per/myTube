import React, { useState , useEffect } from "react";
import { CSSReset } from "./components/CSSReset/CSSReset"
import Header from "./components/Header/index.js";
import PlaylistView from "./components/PlaylistView/index.js";
import Banner from "./components/Banner/index.js"

function App() {

  const [playlists,setPlaylist] = useState({});

  useEffect(() => {
    const loadPlaylists = async () => {
      const response = await fetch("http://localhost:3001");
      const result = await response.json();
      console.log(result)
      setPlaylist(result);
    };
    loadPlaylists();
  }, []);

  return (
    <CSSReset>
      <Header></Header>
      <Banner></Banner>
      <PlaylistView playlists={playlists}></PlaylistView>
    </CSSReset>
  );

}

export default App;
