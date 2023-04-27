import styled from "styled-components";

export const Container = styled.form`


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
    position: relative;
    padding: 16px;
    padding-top: 40px;

`;

export const CloseButton = styled.button`

    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size:16px

`;

export const SubmitButton = styled.button`

    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
    font-weight: bold;
    margin-bottom: 16px;

`;

export const StyledInput = styled.input`

    border-radius: 2px;
    border: 1px solid;
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;

`;
