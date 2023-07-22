import React, { useState } from "react";
import { Container , ModalContainer , CloseButton , SubmitButton , StyledInput } from "./styles.js"

const AddVideoForm = ({formVisible,close,setFormVisible,setEffect,effectCount,username}) => {
    
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
                    await fetch("http://localhost:3001/addVideo/" + encodeURIComponent(values.url) + "/" + encodeURIComponent(values.playlistName) + "/" + encodeURIComponent(username),{method:"POST"});
                    setFormVisible(false)
                    setEffect(effectCount + 1);
                }}>Submit</SubmitButton>
            </ModalContainer>
        </Container>
    );
    else return null;
}

export default AddVideoForm;