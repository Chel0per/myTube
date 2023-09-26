import React from "react";
import { Container,ModalContainer,InfoText,CreateAccountButton,CloseButton,InfoTitle } from "./styles.js";
import { useNavigate } from "react-router-dom"

const InfoModal = ({showModal,setModal}) => {

    const navigate = useNavigate();

    if(showModal) return(
        <Container>
            <ModalContainer>
                <InfoTitle>MyTube</InfoTitle>
                <CloseButton type="button" onClick={()=>setModal(false)}>&times;</CloseButton>
                <InfoText>
                    This is a website used to make playlists of youtube videos. Just copy the url of the video and
                    and type the name of the playlist. Create an account in the create account page and access 
                    it in the login page. You can add 10 videos per day. hope you like it!
                </InfoText>
                <CreateAccountButton type="button" onClick={()=>navigate("/createUser")}>Create Account</CreateAccountButton>
            </ModalContainer>
        </Container>
    )
    else return null;

}

export default InfoModal;