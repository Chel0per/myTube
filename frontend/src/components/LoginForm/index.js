import React, { useState } from "react";
import { Container,FormContainer,Form,Header,UserDiv,UserInput,UserLabel,UserSpam,PasswordDiv,PasswordLabel,PasswordInput,PasswordSpam,LoginButton } from "./styles.js";

const LoginForm = () => {

    const [passwordSpan,setPasswordSpan] = useState("");
    const [userSpan,setUserSpan] = useState("");
    const [userBorder,setUserBorder] = useState("none");
    const [passwordBorder,setPasswordBorder] = useState("none");

    async function handleLoginSubmit(){
        setPasswordSpan("Incorrect password");
        setUserSpan("Valid user");
        setUserBorder("0 0 3px green");
        setPasswordBorder("0 0 3px red");
    }   
    
    return(
        <Container>
            <FormContainer>
                <Form>
                <Header>MyTube</Header>
                    <UserDiv>
                        <UserLabel>User</UserLabel>
                        <UserInput boxShadow={userBorder}></UserInput>
                        <UserSpam>{userSpan}</UserSpam>
                    </UserDiv>
                    <PasswordDiv>
                        <PasswordLabel>Password</PasswordLabel>
                        <PasswordInput boxShadow={passwordBorder}></PasswordInput>
                        <PasswordSpam>{passwordSpan}</PasswordSpam>
                    </PasswordDiv>
                    <LoginButton type="submit" onClick={()=> handleLoginSubmit()}>Login</LoginButton>
                </Form>
            </FormContainer>
        </Container>
    )

}

export default LoginForm;