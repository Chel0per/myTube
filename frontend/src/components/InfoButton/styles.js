import styled from "styled-components";

export const Container = styled.div`

    position:absolute;
    top:30px;
    right:30px

`;

export const Button = styled.button`

    height: 50px;
    width: 50px;
    border-radius: 50%;
    font-size: 18px;
    background-color: red;
    box-shadow: 0 0 2px black;
    border:none;
    outline: none;
    cursor:pointer;
    :hover {
        box-shadow: 0 0 2px hsl(0,100%,100%);
    }


`;
