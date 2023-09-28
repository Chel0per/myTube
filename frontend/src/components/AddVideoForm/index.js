import React, { useState } from "react";
import { Container , ModalContainer , CloseButton , SubmitButton , StyledInput } from "./styles.js"

const AddVideoForm = ({formVisible,close,setFormVisible,setEffect,effectCount,username,setWarning}) => {
    
    const [values,setValues] = useState({url:"",playlistName:""});
    
    if(formVisible) return(
        <Container>
            <ModalContainer>
                <CloseButton type="button" onClick = {close}>&times;</CloseButton>
                <StyledInput placeholder="URL" onChange={(e) =>{
                    const value = e.target.value;
                        setValues({
                            ...values,
                            url:value,
                    })}}></StyledInput>
                <StyledInput placeholder="Playlist name" onChange={(e) =>{
                    const value = e.target.value;
                        setValues({
                            ...values,
                            playlistName:value,
                    })}}></StyledInput>
                <SubmitButton type="button" onClick={async ()=>{
                    let response = await fetch("https://mytube.cyclic.app/addVideo/" + encodeURIComponent(values.url) + "/" + encodeURIComponent(values.playlistName) + "/" + encodeURIComponent(username),{method:"POST"});
                    let data = await response.json();
                    setFormVisible(false);
                    setWarning(data.status);
                    setEffect(effectCount + 1);
                }}>Submit</SubmitButton>
            </ModalContainer>
        </Container>
    );
    else return null;
}

export default AddVideoForm;