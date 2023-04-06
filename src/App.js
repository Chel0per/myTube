import React from "react";
import { CSSReset } from "./components/CSSReset/CSSReset"
import Header from "./components/Header/index.js";
import PlaylistView from "./components/PlaylistView/index.js";
import playlists from "./playlists.json"
import Banner from "./components/Banner/index.js"

function App() {
  return (
    <CSSReset>
      <Header></Header>
      <Banner></Banner>
      <PlaylistView playlists={playlists}></PlaylistView>
    </CSSReset>
  );

}

export default App;
