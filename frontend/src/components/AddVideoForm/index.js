import React from "react";
import { Container , ModalContainer , CloseButton , SubmitButton , StyledInput } from "./styles.js"

const AddVideoForm = ({formVisible,close}) => {
    if(formVisible) return(
        <Container>
            <ModalContainer>
                <CloseButton type="button" onClick = {close}>x</CloseButton>
                <StyledInput placeholder="URL do Vídeo"></StyledInput>
                <StyledInput placeholder="Nome da playlist"></StyledInput>
                <SubmitButton type="button">Submit</SubmitButton>
            </ModalContainer>
        </Container>
    );
    else return null;
}

export default AddVideoForm;