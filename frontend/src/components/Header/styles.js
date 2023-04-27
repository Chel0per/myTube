import styled from "styled-components";

export const Container = styled.div`

    width:100%;
    height:100px;
    background-color:#f9f9f9;
    margin:0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const SearchBar = styled.input`
    
    padding: 10px;
    width: 280px;
    height: 70px;
    background-color: #ffffff;
    border: 3px solid #e5e5e5e5;
    border-radius: 10px;
    box-sizing: border-box;
    font-family: Comic Sans MS;
    font-size: 26px;
    color: #222222;
    outline: none;
    transition: .5s;

`;

export const Box = styled.div`

    position: relative;

`;

export const Tag = styled.i`

    position: absolute;
    top: 50%;
    right: 15px;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: #222222;
    transition: .4s;

    

`;



export const Logo = styled.div`

    display:flex;
    flex-direction:row;
    width:175px;
    justify-content:center;
    padding-left:50px;



`;

export const My = styled.p`

    color:red;
    font-size:30px;
    font-weight:500;

`;

export const Tube = styled.p`

    font-size:30px;
    font-weight:500;


`;

export const Creator = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    height:100px;
    width:175px;
    padding-right:50px;
    


`;

export const Occupation = styled.p`

    height:20px;
    font-size:12px;
    padding: 0;
    margin: 0;
    align-self:center;
    font-weight:500;
    color:#222222;

`;

export const Name = styled.p`

    height:20px;
    font-size:12px;
    padding: 0;
    margin: 0;
    align-self:center;
    font-weight:500;
    color:#222222;

`;

export const Photo = styled.img`

    height: 50px;
    width: 50px;
    border-radius:50%;
    


`;