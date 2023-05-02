import styled from "styled-components";

export const Container = styled.div`

    position: relative;

`;

export const FlexContainer = styled.div`

    width:100%;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;

`;

export const AddButton = styled.button`

    position: sticky;
    top: 32px;
    right: 16px;
    z-index: 4;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;

`;

export const FixedContainer = styled.div`

    position: absolute;
    top: 32px;
    right: 16px;
    z-index: 2;
    height: 100%;

`;


