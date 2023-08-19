import React from "react";
import {Container,SearchBar,Name,Photo,User,Box,Tag} from "./styles.js";
import { FaSearch } from "react-icons/fa";
import Logo from "../Logo/index.js"
import userLogo from "./logo.png"

const Header = ({filter,setFilter,username,logoLink}) => {

    let shouldHideTag = filter !== "";
        
    return(
        <Container>
            <Logo></Logo>
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