import styled from "styled-components";

export const Container = styled.div`

    position:fixed;
    left: 50%;
    transform: translate(-50%);
    top: 20px;
    width:400px;
    border: 2px solid black;
    border-radius: 10px;
    gap: 8px;
    z-index: 10;
    background-color: white;
    display:flex;
    flex-direction: column;
    
`;

export const Warning = styled.p`

    padding-left: 30px;
    padding-right: 30px;

`;

export const OkButton = styled.button`

    height: 40px;
    width: 120px;
    background-color: #2490e3;
    color:white;
    border:none;
    border-radius: 15px;
    align-self: center;
    cursor:pointer;
    margin-bottom: 15px;
    :hover {
        transform: scale(1.05);
    }

`;