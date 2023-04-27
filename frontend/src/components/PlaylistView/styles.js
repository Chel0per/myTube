import styled from "styled-components";

export const Container = styled.div`

    position: relative;

`;

export const FlexContainer = styled.div`

    width:100%;
    display:flex;
    flex-direction: column;

`;

export const AddButton = styled.button`

        position: absolute;
        top: 32px;
        right: 16px;
        z-index: 2;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: red;
        color: white;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: bold;

`;


