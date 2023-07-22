import React from "react";
import {Container,SearchBar,Name,Logo,Photo,User,Box,Tag,My,Tube} from "./styles.js";
import { FaSearch } from "react-icons/fa";
import userLogo from "./logo.png"

const Header = ({filter,setFilter,username,logoLink}) => {

    let shouldHideTag = filter !== "";
        
    return(
        <Container>
            <Logo>
                <My>My</My>
                <Tube>Tube</Tube>
            </Logo>
            <Box>
                <SearchBar onChange={(e)=> setFilter(e.target.value)}></SearchBar>
                {!shouldHideTag && <Tag><FaSearch /></Tag>}
            </Box>
            <User>
                <Photo src={userLogo}/>
                <Name>{username}</Name>
            </User>
        </Container>
    )
}

export default Header;