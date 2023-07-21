import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-image: url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80");
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const FormContainer = styled.div`

    width: 60%;
    max-width: 500px;
    min-width: 300px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    background-color: hsl(0,100%,10%,.7);
    box-shadow: 0 0 15px 0 hsl(0,100%,10%);
    padding: 40px 30px;

`;

export const Form = styled.div`

    display:flex;
    flex-direction: column;
    gap: 20px;


`;

export const Header = styled.h2`

    font-size: 20px;
    text-align: center;

`;

export const UserDiv = styled.div`

    display:flex;
    flex-direction: column;
    gap: 7px;
    font-weight: bold;

`;

export const UserLabel = styled.label`


`;
 
export const UserInput = styled.input`

    font-weight:light ;
    padding: .5rem;
    background-color: hsl(0,100%,45%,.3);
    font-size: 1.25rem;
    border:none;
    outline:none;
    border-radius: .25rem;
    box-shadow: ${props => props.boxShadow};
    :focus{
        box-shadow: 0 0 3px hsl(0,100%,100%);
    }

`;

export const UserSpam = styled.span`

    height:15px;
    font-size: 12px;
    color:${props => props.color}; 

`;

export const PasswordDiv = styled.div`

    display:flex;
    flex-direction: column;
    gap: 7px;
    font-weight: bold;

`;

export const PasswordLabel = styled.label`

    

`;
 
export const PasswordInput = styled.input`

    font-weight:light ;
    padding: .5rem;
    background-color: hsl(0,100%,45%,.3);
    font-size: 1.25rem;
    border:none;
    outline:none;
    border-radius: .25rem;
    box-shadow: ${props => props.boxShadow};
    :focus{
        box-shadow: 0 0 3px hsl(0,100%,100%);
    }

`;

export const PasswordSpam = styled.span`
    height:15px;
    font-size: 12px;
    color: red;
`;

export const LoginButton = styled.button`

    padding: .5em 1em;
    font-size: 1.5rem;
    background-color: red;
    border-radius: .25em;
    box-shadow: 0 0 2px black;
    border:none;
    outline: none;
    cursor:pointer;
    :hover {
        box-shadow: 0 0 2px hsl(0,100%,100%);
    }

`;