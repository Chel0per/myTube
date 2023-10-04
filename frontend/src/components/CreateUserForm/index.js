import React,{ useState } from "react";
import { PasswordInput, PasswordLabel,Title,SubTitle,UsernameDiv,UsernameInput,UsernameLabel,PasswordDiv } from "./styles.js";
import { TitleDiv,ConfirmPasswordDiv,ConfirmPasswordInput,ConfirmPasswordLabel,Container,CreateAccount } from "./styles.js";

const CreateUserForm = ({setWarning,setViewPopUp})=>{
    
    const [inputValues,setInputValues] = useState({});

    async function handleLoginSubmit(values){
        if(values.username.length === 0){
            setWarning("You must type an username");
            setViewPopUp(true);
        }
        else if(values.password !== values.cPassword){           
            setWarning("Passwords must match!");
            setViewPopUp(true);
        }
        else{
            let requestBody = {
                username:inputValues.username,
                password:inputValues.password
            }
            let response = await fetch("http://localhost:3001/createUser",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(requestBody)
            });
            let object = await response.json();

            setWarning(object.status);
            setViewPopUp(true);

        }
    }
    
    return (
        <Container>
            <TitleDiv>
                <Title>Create your account</Title>
                <SubTitle>Create an account to start making your playlists</SubTitle>
            </TitleDiv>
            <UsernameDiv>
                <UsernameLabel>Username</UsernameLabel>
                <UsernameInput maxLength={34} onChange={(e)=>setInputValues({...inputValues, username:e.target.value})}></UsernameInput>
            </UsernameDiv>
            <PasswordDiv>
                <PasswordLabel>Password</PasswordLabel>
                <PasswordInput type="password" maxLength={34} onChange={(e)=>setInputValues({...inputValues, password:e.target.value})}></PasswordInput>
            </PasswordDiv> 
            <ConfirmPasswordDiv>
                <ConfirmPasswordLabel>Confirm Password</ConfirmPasswordLabel>
                <ConfirmPasswordInput type="password" maxLength={34} onChange={(e)=>setInputValues({...inputValues, cPassword:e.target.value})}></ConfirmPasswordInput>
            </ConfirmPasswordDiv>
            <CreateAccount onClick={()=>handleLoginSubmit(inputValues)}>Create account</CreateAccount>
        </Container>
    )
}

export default CreateUserForm;