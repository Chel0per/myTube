import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px,1fr);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    box-sizing: border-box;

`;

export const Url = styled.div`

    scroll-snap-align: start;

`;

export const Title = styled.span`

    padding-top: 8px;
    display: block;
    padding-right: 24px;
    color:"#222222";

`;

export const Clickable = styled.a`

    cursor: pointer;
    color:black;
    text-decoration: none;

`;
