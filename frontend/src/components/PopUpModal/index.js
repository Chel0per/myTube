import React from "react";
import { Container,Warning,OkButton } from "./styles.js"

const PopUpModal = ({viewPopUp,warning,setViewPopUp})=> {

    if(viewPopUp) return(
        <Container>
            <Warning>{warning}</Warning>
            <OkButton onClick={()=>setViewPopUp(false)}>Ok</OkButton>
        </Container>
    )
    else return null;
    
}

export default PopUpModal;
