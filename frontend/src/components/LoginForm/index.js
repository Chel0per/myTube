import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Container,FormContainer,Form,Header,UserDiv,UserInput,UserLabel,UserSpam,PasswordDiv,PasswordLabel,PasswordInput,PasswordSpam,LoginButton } from "./styles.js";

const LoginForm = () => {

    const [passwordSpan,setPasswordSpan] = useState("");
    const [userSpan,setUserSpan] = useState("");
    const [userBorder,setUserBorder] = useState("none");
    const [userSpanColor,setUserSpanColor] = useState("black");
    const [passwordBorder,setPasswordBorder] = useState("none");
    const [values,setValues] = useState({});

    const navigate = useNavigate();

    async function handleLoginSubmit(){

        let response = await fetch("https://mytube.cyclic.app/loginValidate/" + encodeURIComponent(values.user) + "/" + encodeURIComponent(values.password),{method:"GET"});
        let userData = await response.json();

        if(userData.status==="Unvalid user"){
            setUserSpan("Unvalid user");
            setUserBorder("0 0 3px red");
            setPasswordSpan("");
            setPasswordBorder("none");
            setUserSpanColor("red");
        }
        else if(userData.status==="Incorrect password"){
            setPasswordSpan("Incorrect password");
            setUserSpan("Valid user");
            setUserBorder("0 0 3px green");
            setPasswordBorder("0 0 3px red");
            setUserSpanColor("green");
        }
        else{
            navigate("/home",{state:userData});
        }
    }   
    
    return(
        <Container>
            <FormContainer>
                <Form>
                <Header>MyTube</Header>
                    <UserDiv>
                        <UserLabel>User</UserLabel>
                        <UserInput boxShadow={userBorder} maxLength={34} onChange={(e) =>{
                        const value = e.target.value;
                        setValues({
                            ...values,
                            user:value,
                        })}}>
                        </UserInput>
                        <UserSpam color={userSpanColor}>{userSpan}</UserSpam>
                    </UserDiv>
                    <PasswordDiv>
                        <PasswordLabel>Password</PasswordLabel>
                        <PasswordInput type="password" boxShadow={passwordBorder} maxLength={34} onChange={(e) =>{
                        const value = e.target.value;
                        setValues({
                            ...values,
                            password:value,
                        })}}>
                        </PasswordInput>
                        <PasswordSpam>{passwordSpan}</PasswordSpam>
                    </PasswordDiv>
                    <LoginButton type="submit" onClick={()=> handleLoginSubmit()}>Login</LoginButton>
                </Form>
            </FormContainer>
        </Container>
    )

}

export default LoginForm;