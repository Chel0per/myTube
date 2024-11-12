import styled from "styled-components";

export const Container = styled.div`

    width:100%;
    height:100px;
    background-color:#f9f9f9;
    margin:0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;
    box-sizing: border-box;

    @media (max-width: 600px) {

        padding: 0 30px;

        .sc-cMlaQw {

            flex-direction: column;
            width:50px;
            
            p {
                font-size: 24px;
            }

        }

    }

    @media (max-width: 350px) {

    padding: 0 15px;

    .sc-cMlaQw {

        flex-direction: column;
        width:50px;
        
        p {
            font-size: 24px;
        }

    }

    }

`

export const SearchBar = styled.input`
    
    padding: 10px;
    width: 280px;
    height: 70px;
    background-color: #ffffff;
    border: 3px solid #e5e5e5e5;
    border-radius: 10px;
    box-sizing: border-box;
    font-family: Comic Sans MS;
    font-size: 20px;
    color: #222222;
    outline: none;
    transition: .5s;
    box-sizing: border-box;

    @media (max-width: 600px) {

        width:160px;
        height: 50px;
        font-size: 14px;

    }

`;

export const Box = styled.div`

    position: relative;

`;

export const Tag = styled.i`

    position: absolute;
    top: 50%;
    right: 15px;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: #222222;
    transition: .4s;

    @media (max-width: 600px) {

        font-size: 15px;

    }

`;

export const User = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100px;
    width:175px;
    gap:10px;
    box-sizing: border-box;

    @media (max-width: 600px) {

        width: 50px;

    }

`;

export const Occupation = styled.p`

    height:20px;
    font-size:12px;
    padding: 0;
    margin: 0;
    align-self:center;
    font-weight:500;
    color:#222222;

`;

export const Name = styled.p`

    height:20px;
    font-size:12px;
    padding: 0;
    margin: 0;
    align-self:center;
    font-weight:500;
    color:#222222;

`;

export const Photo = styled.img`

    height: 50px;
    width: 50px;
    border-radius:50%;
    cursor:pointer;
    :hover {
        transform: scale(1.1);
    }


`;