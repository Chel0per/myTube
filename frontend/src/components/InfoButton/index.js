import React from "react";
import { Container,Button } from "../InfoButton/styles";
import  { FaInfo } from "react-icons/fa";

const InfoButton = ({setModal}) => {
    return(
        <Container>
            <Button onClick={()=>setModal(true)}><FaInfo></FaInfo></Button>
        </Container>
    )
}

export default InfoButton;