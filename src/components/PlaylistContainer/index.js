import React from "react";
import { Container,Title,Videos } from "./styles.js";

const PlaylistContainer = ({title}) => {
    return(
        <Container>
            <Title>{title}</Title>
            <Videos></Videos>
        </Container>
    )
}

export default PlaylistContainer;