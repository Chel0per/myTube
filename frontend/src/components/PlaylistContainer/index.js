import React, { useState } from "react";
import { Container,Title,TitleContainer,DeleteButton } from "./styles.js";
import VideoContainer from "../VideoContainer/index.js";
import ConfirmationModal from "../ConfirmationModal/index.js";

const PlaylistContainer = ({filter,username,title,playlist,effectCount,setEffect,playlistId,setWarning}) => {
    
    const [viewConfirmationModal,setConfirmationModal] = useState(false);
    
    return(
        <Container>
            <TitleContainer>
                <ConfirmationModal viewConfirmationModal={viewConfirmationModal} setConfirmationModal={setConfirmationModal} username={username} title={title} setEffect={setEffect} effectCount={effectCount} setWarning={setWarning} playlistId={playlistId}></ConfirmationModal>
                <Title>{title}</Title>
                <DeleteButton onClick={()=>setConfirmationModal(true)}>&times;</DeleteButton>
            </TitleContainer>
            
            <VideoContainer filter={filter} playlist={playlist} playlistId={playlistId} setEffect={setEffect} effectCount={effectCount} username={username} setWarning={setWarning}></VideoContainer>
        </Container>
    )
}

export default PlaylistContainer;