import React, { useState } from "react";
import { FlexContainer,Container,AddButton,FixedContainer } from "./styles.js";
import PlaylistContainer from "../PlaylistContainer/index.js"
import AddVideoForm from "../AddVideoForm/index.js"

const PlaylistView = ({filter,playlists,setEffect,effectCount,username}) => {
    
    const [formVisible,setFormVisible] = useState(false);
  
    return (
        <Container>
            <FlexContainer>{
                playlists.map(function (playlist) { 
                    let filteredPlaylist = playlist.videos.filter((video) => {
                        return video.title.toLowerCase().includes(filter.toLowerCase())
                    });
                    if (filteredPlaylist.length > 0){               
                    return(
                        <PlaylistContainer filter={filter} key={playlist._id} playlistId={playlist._id} title={playlist.name} playlist={filteredPlaylist} effectCount={effectCount} setEffect={setEffect} username={username}></PlaylistContainer>                
                    )}
                    else return null;
                })
            }
            </FlexContainer>
            <FixedContainer>
                <AddButton onClick={() => setFormVisible(true)}>+</AddButton>
            </FixedContainer>
            <AddVideoForm formVisible={formVisible} setFormVisible={setFormVisible} close={() => setFormVisible(false)} effectCount={effectCount} setEffect={setEffect} username={username}></AddVideoForm>
        </Container>           
    )   
}

export default PlaylistView;