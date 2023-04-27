import React from "react";
import { Container,Title } from "./styles.js";
import VideoContainer from "../VideoContainer/index.js"

const PlaylistContainer = ({title,playlist}) => {
    return(
        <Container>
            <Title>{title}</Title>
            <VideoContainer playlist={playlist}></VideoContainer>
        </Container>
    )
}

export default PlaylistContainer;