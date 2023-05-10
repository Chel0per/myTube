import React from "react";
import { Container,Title,TitleContainer,DeleteButton } from "./styles.js";
import VideoContainer from "../VideoContainer/index.js"

const PlaylistContainer = ({title,playlist,effectCount,setEffect}) => {
    return(
        <Container>
            <TitleContainer>
                <Title>{title}</Title>
                <DeleteButton onClick={ async()=> {
                    await fetch("http://localhost:3001/dropCollection/"+encodeURIComponent(title),{method:"DELETE"});
                    setEffect(effectCount+1);
                }}>&times;</DeleteButton>
            </TitleContainer>
            
            <VideoContainer playlist={playlist} collection={title} setEffect={setEffect} effectCount={effectCount}></VideoContainer>
        </Container>
    )
}

export default PlaylistContainer;