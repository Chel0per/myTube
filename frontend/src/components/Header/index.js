import React from "react";
import {Container,SearchBar,Name,Photo,User,Box,Tag} from "./styles.js";
import { FaSearch } from "react-icons/fa";
import Logo from "../Logo/index.js"

const Header = ({filter,setFilter,username,imageUrl}) => {

    let shouldHideTag = filter !== "";
        
    return(
        <Container>
            <Logo className="logo"></Logo>
            <Box>
                <SearchBar onChange={(e)=> setFilter(e.target.value)}></SearchBar>
                {!shouldHideTag && <Tag><FaSearch /></Tag>}
            </Box>
            <User>
                <Photo src={imageUrl}/>
                <Name>{username}</Name>
            </User>
        </Container>
    )
}

export default Header;