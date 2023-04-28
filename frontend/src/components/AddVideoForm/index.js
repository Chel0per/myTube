import React, { useState } from "react";
import { Container , ModalContainer , CloseButton , SubmitButton , StyledInput } from "./styles.js"

const AddVideoForm = ({formVisible,close,setFormVisible}) => {
    
    const [values,setValues] = useState({url:"",playlistName:""});
    
    if(formVisible) return(
        <Container>
            <ModalContainer>
                <CloseButton type="button" onClick = {close}>x</CloseButton>
                <StyledInput placeholder="URL do Vídeo" onChange={(e) =>{
                    const value = e.target.value;
                        setValues({
                            ...values,
                            url:value,
                    })}}></StyledInput>
                <StyledInput placeholder="Nome da playlist" onChange={(e) =>{
                    const value = e.target.value;
                        setValues({
                            ...values,
                            playlistName:value,
                    })}}></StyledInput>
                <SubmitButton type="button" onClick={async ()=>{
                    await fetch("http://localhost:3001/addVideo/" + encodeURIComponent(values.url) + "/" + values.playlistName);
                    setFormVisible(false);
                }}>Submit</SubmitButton>
            </ModalContainer>
        </Container>
    );
    else return null;
}

export default AddVideoForm;