import React from "react";
import {CSSReset} from "./components/CSSReset/CSSReset.js";
import Header from "./components/Header/index.js";
import PlaylistView from "./components/PlaylistView/index.js";
import playlists from "./playlists.json"

function App() {
  return (
    <CSSReset>
      <Header></Header>
      <PlaylistView playlists={playlists}></PlaylistView>
    </CSSReset>
  );

}

export default App;
