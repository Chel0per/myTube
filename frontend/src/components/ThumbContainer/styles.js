import styled from "styled-components";

export const Clickable = styled.a`

    cursor: pointer;

`;

export const Container = styled.div`

    position: relative;
    width: 209px;
    height: 116px;

    :hover button {
        display: block;
    }

`;

export const Thumb = styled.img`

    width: 209px;
    height: 116px;
    font-weight: 500;
    object-fit: cover;
    z-index: 2;
    box-sizing: border-box;

`;

export const DeleteButton = styled.button`

    width: 25px;
    height: 25px;
    position: absolute;
    border-radius: 50%;
    top: 9px;
    right: 9px;
    color: black;
    background-color: red;
    border: 1px solid black;
    cursor: pointer;
    font-size:21px;
    z-index: 3;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 10px;
    text-align: center;
    display:none
    
`;

export const ModalButton = styled.button`

    width: 25px;
    height: 25px;
    position: absolute;
    border-radius: 50%;
    top: 43px;
    right: 9px;
    color: black;
    background-color: red;
    border: 1px solid black;
    cursor: pointer;
    font-size:12px;
    z-index: 3;
    padding: 0;
    font-weight: bold;
    text-align: center;
    display:none
    
`;

export const UpdateForm = styled.div`

    position: relative;

`;

export const ReturnButton = styled.button`

    width: 18px;
    height: 18px;
    position: absolute;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    color: red;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size:20px;
    z-index: 3;
    padding: 0;
    font-weight: bold;
    text-align: center;

`;

export const FormFlex = styled.div`

    display:flex;
    flex-direction: column;
    padding: 0;
    justify-content: space-between;
    width: 209px;
    height: 116px;
    background-color: rgb(249, 249, 249);
    border: 3px solid rgba(229, 229, 229, 0.898);
    font-weight: 500;
    padding: 10px 25px;
    z-index: 2;
    box-sizing: border-box;
    
`;

export const TitleInput = styled.textarea`

    height: 50px;

`;

export const ButtonsRow = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const UpdateButton = styled.button`

    background-color: red;
    color:white;
    cursor: pointer;
    border: none;
    height: 20px;
    width: 70px

`;

export const OriginalButton = styled.button`

    background-color: red;
    color:white;
    cursor: pointer;
    border: none;
    height: 20px;
    width: 70px

`;