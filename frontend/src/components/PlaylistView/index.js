import React, { useState } from "react";
import { FlexContainer,Container,AddButton } from "./styles.js";
import PlaylistContainer from "../PlaylistContainer/index.js"
import AddVideoForm from "../AddVideoForm/index.js"

const PlaylistView = ({playlists}) => {
    
    const playlistNames = Object.keys(playlists);
    const [formVisible,setFormVisible] = useState(false);
  
    return (
        <Container>
            <FlexContainer>{
                playlistNames.map(function (playlistName) { 
                    const playlist = playlists[playlistName];               
                    return(
                        <PlaylistContainer key={playlistName} title={playlistName} playlist={playlist}></PlaylistContainer>                
                    )
                })
            }
            </FlexContainer>
            <AddButton onClick={() => setFormVisible(true)}>+</AddButton>
            <AddVideoForm formVisible={formVisible} close={() => setFormVisible(false)}></AddVideoForm>
        </Container>           
    )   
}

export default PlaylistView;