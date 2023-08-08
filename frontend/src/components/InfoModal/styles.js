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
    border-radius: 6px;
    max-width: 320px;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 16px;
    padding-bottom: 0;
    border: 2px solid black;
    align-items: center;
    gap: 20px;

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
    font-size:24px

`;

export const InfoText = styled.p`

    width: 200px;
    text-align: center;

`;

export const InfoTitle = styled.h2`

    margin: 0;
    margin-top: 20px;


`;

export const CreateAccountButton = styled.button`

    padding: 12px 8px;
    background-color: red;
    font-size : 18px;
    font-weight: 500;
    border:2px solid black;
    outline: none;
    border-radius: 10px;
    width: 180px;
    color: white;
    cursor:pointer;
    :hover {
        transform: scale(1.05);
    }
    margin-bottom: 20px;

`;
