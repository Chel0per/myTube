import styled from "styled-components";

export const Container = styled.div`

    width: calc(100vw - 16px * 4);
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px,1fr);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

`;

export const Url = styled.a`

    scroll-snap-align: start;

`;

export const Thumb = styled.img`

    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;

`;

export const Title = styled.span`

    padding-top: 8px;
    display: block;
    padding-right: 24px;
    color:"#222222";

`;