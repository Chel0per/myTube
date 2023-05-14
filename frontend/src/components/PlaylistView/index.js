import React, { useState } from "react";
import { FlexContainer,Container,AddButton,FixedContainer } from "./styles.js";
import PlaylistContainer from "../PlaylistContainer/index.js"
import AddVideoForm from "../AddVideoForm/index.js"

const PlaylistView = ({filter,playlists,setEffect,effectCount}) => {
    
    const playlistNames = Object.keys(playlists);
    const [formVisible,setFormVisible] = useState(false);
  
    return (
        <Container>
            <FlexContainer>{
                playlistNames.map(function (playlistName) { 
                    let playlist = playlists[playlistName];
                    playlist = playlist.filter((video) => {
                        return video.title.toLowerCase().includes(filter.toLowerCase())
                    });
                    if (playlist.length > 0){               
                    return(
                        <PlaylistContainer filter={filter} key={playlistName} title={playlistName} playlist={playlist} effectCount={effectCount} setEffect={setEffect}></PlaylistContainer>                
                    )}
                    else return null;
                })
            }
            </FlexContainer>
            <FixedContainer>
                <AddButton onClick={() => setFormVisible(true)}>+</AddButton>
            </FixedContainer>
            <AddVideoForm formVisible={formVisible} setFormVisible={setFormVisible} close={() => setFormVisible(false)} effectCount={effectCount} setEffect={setEffect}></AddVideoForm>
        </Container>           
    )   
}

export default PlaylistView;