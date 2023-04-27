import React from "react";
import { Container,Url,Thumb,Title } from "./styles.js"

const VideoContainer = ({playlist}) => {
    return(
        <Container>
            {playlist.map(function(video) {
                return(
                    <Url key={video._id} href={video.link}>
                        <Thumb src={video.thumb}></Thumb>
                        <Title>{video.title}</Title>
                    </Url>
                )
            })}
        </Container>
    )
}

export default VideoContainer;