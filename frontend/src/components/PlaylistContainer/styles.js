import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    box-sizing: border-box;

`;

export const Title = styled.p`

    font-size: 16px;
    margin-bottom: 16px;

`;

export const TitleContainer = styled.div`

    display:flex;
    flex-direction:row;
    gap:16px;
    align-items: center;

`;

export const DeleteButton = styled.button`

    width: 22px;
    height: 22px;
    border-radius: 30%;
    background-color: rgb(249, 249, 249);
    border: 1px solid black;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    padding: 0;
    text-align: center;

`;
