import styled from "styled-components";

export const Container = styled.div`


    width: 90%;
    padding: 5%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0; 
    bottom: 0;
    left: 0; 
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ModalContainer = styled.div`

    flex: 1;
    border-radius: 8px;
    max-width: 320px;
    background-color: rgb(249, 249, 249);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 16px;
`;

export const AcceptButton = styled.button`
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
    font-weight: bold;
    margin-bottom: 16px;
    width:100px
`;

export const DeclineButton = styled.button`
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
    font-weight: bold;
    margin-bottom: 16px;
    width:100px
`;

export const ButtonSection = styled.section`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const WarningText = styled.p`
    padding: 30px 30px;
    margin: 0px
`;







