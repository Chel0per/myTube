import React from "react";
import { Container } from "./styles";
import PlaylistContainer from "../PlaylistContainer/index.js"

const PlaylistView = ({playlists}) => {
    
    const playlistNames = Object.keys(playlists);
  
    return <Container>{
        playlistNames.map(function (playlistName) {                
            return(
                <PlaylistContainer title={playlistName}></PlaylistContainer>                
            )
        }
    )}
    </Container>    
}

export default PlaylistView;