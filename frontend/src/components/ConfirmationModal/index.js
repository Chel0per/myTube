import React from "react";
import { Container,ModalContainer,AcceptButton,DeclineButton,ButtonSection,WarningText } from "./styles.js";

const ConfirmationModal = ({viewConfirmationModal,setConfirmationModal,username,title,playlistId,effectCount,setEffect,setWarning}) => {
    if(viewConfirmationModal){
        return(
            <Container>
                <ModalContainer>
                    <WarningText>Are you sure you want to delete the playlist "{title}"? All videos of the playlist will be erased.</WarningText>
                    <ButtonSection>
                        <AcceptButton onClick={ async()=> {
                            setConfirmationModal(false);
                            let response = await fetch("https://my-tube-api.vercel.app/deletePlaylist/" + encodeURIComponent(username) + "/" + encodeURIComponent(playlistId),{method:"DELETE"});
                            let data = await response.json();
                            setWarning(data.status);
                            setEffect(effectCount+1);
                        }}>Confirm</AcceptButton>
                        <DeclineButton onClick={()=> setConfirmationModal(false)}>Cancel</DeclineButton>
                    </ButtonSection>    
                </ModalContainer>
            </Container>
        )
    }
    else return null;
}

export default ConfirmationModal;