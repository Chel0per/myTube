import React, { useState } from 'react';
import { Container, Thumb, DeleteButton,UpdateButton,Clickable,ModalButton,UpdateForm,FormFlex,ReturnButton,OriginalButton,ButtonsRow,TitleInput } from './styles.js';
import { BiChevronRight } from "react-icons/bi";


const ThumbContainer = ({ src,link,id }) => {
 
    const [thumbModal,setViewThumbModal] = useState("Thumb");
    const [newTitle,setNewTitle] = useState("");
 
    if(thumbModal === "Thumb") return (
        <Container>
            <Clickable href={link}><Thumb src={src}></Thumb></Clickable>
            <DeleteButton>&times;</DeleteButton>
            <ModalButton onClick={() => setViewThumbModal("Modal")}>U</ModalButton>
        </Container>
    );
    else if(thumbModal === "Modal") return (
        <UpdateForm>
            <ReturnButton onClick={() => setViewThumbModal("Thumb")}><BiChevronRight></BiChevronRight></ReturnButton>
            <FormFlex>
                <TitleInput placeholder="Type the new title" onChange={(e) => setNewTitle(e.target.value)}></TitleInput>
                <ButtonsRow>
                    <UpdateButton onClick={(e) => console.log(newTitle)}>Update</UpdateButton>
                    <OriginalButton onClick={() => console.log(id)}>Original</OriginalButton>
                </ButtonsRow> 
            </FormFlex>                            
        </UpdateForm>
    );
};

export default ThumbContainer;