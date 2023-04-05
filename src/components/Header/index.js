import React from "react";
import {Container,SearchBar,Name,Logo,Photo,Occupation,Creator,Box,Tag,My,Tube} from "./styles.js";
import { FaSearch } from "react-icons/fa";
import userLogo from "./userlogo.jpg"

const Header = () => {
    return(
        <Container>
            <Logo>
                <My>My</My>
                <Tube>Tube</Tube>
            </Logo>
            <Box>
                <SearchBar></SearchBar>
                <Tag><FaSearch></FaSearch></Tag>
            </Box>
            <Creator>
                <Photo src={userLogo}/>
                <Name>Marcelo Marques (Chel0per)</Name>
                <Occupation>Mechanical engineering student</Occupation>
            </Creator>
        </Container>
    )
}

export default Header;