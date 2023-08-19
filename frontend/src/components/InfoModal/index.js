import React from "react";
import { Container,ModalContainer,InfoText,CreateAccountButton,CloseButton,InfoTitle } from "./styles.js";
import { useNavigate } from "react-router-dom"

const InfoModal = ({showModal,setModal}) => {

    const navigate = useNavigate();

    if(showModal) return(
        <Container>
            <ModalContainer>
                <InfoTitle>Ovo cozido</InfoTitle>
                <CloseButton type="button" onClick={()=>setModal(false)}>&times;</CloseButton>
                <InfoText>
                    Como fazer um ovo cozido: peque uma panela e coloque água, coloque a panela no fogo
                    e aquarde a água ferver, coloque o ovo na água fervente por 8 minutos. Depois retire
                    ovo da água e tire a casca.
                </InfoText>
                <CreateAccountButton type="button" onClick={()=>navigate("/createUser")}>Create Account</CreateAccountButton>
            </ModalContainer>
        </Container>
    )
    else return null;

}

export default InfoModal;