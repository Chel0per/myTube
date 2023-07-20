import React from "react";
import { Container,Url,Title,Clickable } from "./styles.js"
import ThumbContainer from "../ThumbContainer/index.js";

const VideoContainer = ({playlist,collection,setEffect,effectCount}) => {
    
    return(
        <Container>
            {playlist.map(function(video) {
                return(
                    <Url key={video._id}>
                        <ThumbContainer src={video.thumb} link={video.link} id={video._id} collection={collection} setEffect={setEffect} effectCount={effectCount}></ThumbContainer>
                        <Clickable href={video.link}><Title>{video.title}</Title></Clickable>
                    </Url>
                )
            })}
        </Container>
    )
}

export default VideoContainer;