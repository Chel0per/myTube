import React from "react";
import { Container,Title,Videos } from "./styles";
import PlaylistContainer from "../PlaylistContainer/index.js"

const PlaylistView = ({playlists}) => {
    
    const playlistNames = Object.keys(playlists);
  
    return <Container>{
        playlistNames.map(function (playlistName) {                
            return(
                <PlaylistContainer>
                    <Title>{playlistName}</Title>
                    <Videos></Videos>
                </PlaylistContainer>
            )
        }
    )}
    </Container>    
}

export default PlaylistView;