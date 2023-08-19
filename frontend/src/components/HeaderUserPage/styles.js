import styled from "styled-components";

export const Container = styled.div`

    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    margin: 0px;
    box-shadow: 0px 2px 0px rgba(201, 201, 201, 0.5);

`;

export const LoginButton = styled.button`

    background-color: #330000;
    color:white;
    width: 80px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    margin-right: 50px;
    border:none;
    cursor:pointer;
    :hover {
        background-color:#660000
    }
    border-radius: 3px;

`;