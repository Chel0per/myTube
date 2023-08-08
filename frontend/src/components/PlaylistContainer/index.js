import React from "react";
import { Container,Title,TitleContainer,DeleteButton } from "./styles.js";
import VideoContainer from "../VideoContainer/index.js"

const PlaylistContainer = ({filter,username,title,playlist,effectCount,setEffect,playlistId,setWarning}) => {
    return(
        <Container>
            <TitleContainer>
                <Title>{title}</Title>
                <DeleteButton onClick={ async()=> {
                    let response = await fetch("http://localhost:3001/deletePlaylist/" + encodeURIComponent(username) + "/" + encodeURIComponent(playlistId),{method:"DELETE"});
                    let data = await response.json();
                    setWarning(data.status);
                    setEffect(effectCount+1);
                }}>&times;</DeleteButton>
            </TitleContainer>
            
            <VideoContainer filter={filter} playlist={playlist} playlistId={playlistId} setEffect={setEffect} effectCount={effectCount} username={username} setWarning={setWarning}></VideoContainer>
        </Container>
    )
}

export default PlaylistContainer;