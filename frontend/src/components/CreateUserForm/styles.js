import styled from "styled-components";

export const Container = styled.div`

    align-self: center;
    justify-self: center;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    flex: 1;
    justify-content: center;
`;

export const TitleDiv = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    gap:8px

`;

export const Title = styled.p`

    font-size: 24px;
    font-weight: 600;
    color:#330000;
    margin:0;


`;

export const SubTitle = styled.p`

    font-size: 12px;
    font-weight: 400;
    margin:0;

`;

export const UsernameDiv = styled.div`

    gap:6px;
    display:flex;
    flex-direction: column;

`;

export const UsernameLabel = styled.label`

    color:#330000;
    font-size:12px;
    font-weight:700;

`;

export const UsernameInput = styled.input`

    width: 215px;
    height: 40px;
    font-size:18px

`;

export const PasswordDiv = styled.div`

    gap:6px;
    display:flex;
    flex-direction: column;

`;

export const PasswordLabel = styled.label`

    color:#330000;
    font-size:12px;
    font-weight:700;

`;

export const PasswordInput = styled.input`

    width: 215px;
    height: 40px;
    font-size:18px

`;

export const ConfirmPasswordDiv = styled.div`

    gap:6px;
    display:flex;
    flex-direction: column;

`;

export const ConfirmPasswordLabel = styled.label`

    color:#330000;
    font-size:12px;
    font-weight:700;


`;

export const ConfirmPasswordInput = styled.input`

    width: 215px;
    height: 40px;
    font-size:18px


`;

export const CreateAccount = styled.button`

    background-color: red;
    color:white;
    border:none;
    border-radius: 3px;
    width:223px;
    height:43px;
    margin-top:15px;
    cursor: pointer;
    :hover {
        background-color:#cc0000
    }

`;