import React from "react";
import { Container,Url,Title,Clickable } from "./styles.js"
import ThumbContainer from "../ThumbContainer/index.js";

const VideoContainer = ({username,playlist,setEffect,effectCount,playlistId}) => {
    
    return(
        <Container>
            {playlist.map(function(video) {
                return(
                    <Url key={video._id}>
                        <ThumbContainer src={video.thumb} link={video.link} id={video._id} playlistId={playlistId} setEffect={setEffect} effectCount={effectCount} username={username}></ThumbContainer>
                        <Clickable href={video.link}><Title>{video.title}</Title></Clickable>
                    </Url>
                )
            })}
        </Container>
    )
}

export default VideoContainer;