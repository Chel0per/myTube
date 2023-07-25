import React, { useState } from 'react';
import { Container, Thumb, DeleteButton,UpdateButton,Clickable,ModalButton,UpdateForm,FormFlex,ReturnButton,OriginalButton,ButtonsRow,TitleInput } from './styles.js';
import { BiChevronRight } from "react-icons/bi";


const ThumbContainer = ({ src,link,username,id,playlistId,setEffect,effectCount }) => {
 
    const [thumbModal,setViewThumbModal] = useState("Thumb");
    const [newTitle,setNewTitle] = useState("");
 
    if(thumbModal === "Thumb") return (
        <Container>
            <Clickable href={link}><Thumb src={src}></Thumb></Clickable>
            <DeleteButton onClick={async() => {
                await fetch("http://localhost:3001/deleteVideo/" + encodeURIComponent(username) +"/"+ encodeURIComponent(playlistId) +"/" + encodeURIComponent(id),{method:"DELETE"});
                setEffect(effectCount + 1);
            }}>&times;</DeleteButton>
            <ModalButton onClick={() => setViewThumbModal("Modal")}>U</ModalButton>
        </Container>
    );
    else if(thumbModal === "Modal") return (
        <UpdateForm>
            <ReturnButton onClick={() => setViewThumbModal("Thumb")}><BiChevronRight></BiChevronRight></ReturnButton>
            <FormFlex>
                <TitleInput placeholder="Type the new title" onChange={(e) => setNewTitle(e.target.value)}></TitleInput>
                <ButtonsRow>
                    <UpdateButton >Update</UpdateButton>
                    <OriginalButton >Original</OriginalButton>
                </ButtonsRow> 
            </FormFlex>                            
        </UpdateForm>
    );
};

export default ThumbContainer;