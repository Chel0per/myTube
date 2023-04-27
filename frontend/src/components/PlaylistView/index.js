import React from "react";
import { Container } from "./styles";
import PlaylistContainer from "../PlaylistContainer/index.js"

const PlaylistView = ({playlists}) => {
    
    const playlistNames = Object.keys(playlists);
  
    return <Container>{
        playlistNames.map(function (playlistName) { 
            const playlist = playlists[playlistName];               
            return(
                <PlaylistContainer title={playlistName} playlist={playlist}></PlaylistContainer>                
            )
        }
    )}
    </Container>    
}

export default PlaylistView;