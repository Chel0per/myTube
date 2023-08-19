import React from "react";
import Logo from "../Logo/index.js"
import { Container,LoginButton } from "./styles.js";
import { useNavigate } from "react-router-dom";

const HeaderUserPage = () => {

    const navigate = useNavigate();
    
    return(
        <Container>
            <Logo></Logo>
            <LoginButton onClick={()=>navigate("/")}>Login</LoginButton>
        </Container>
    )
}

export default HeaderUserPage;