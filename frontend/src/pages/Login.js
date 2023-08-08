import React,{ useState } from "react";
import { CSSReset } from "../components/CSSReset/CSSReset";
import LoginForm from "../components/LoginForm/index.js";
import InfoButton from "../components/InfoButton/index.js";
import InfoModal from "../components/InfoModal/index.js"

function Login(){

    const [showModal,setModal] = useState(false);

    return (
        <CSSReset>
            <InfoButton setModal={setModal}></InfoButton>
            <InfoModal showModal={showModal} setModal={setModal}></InfoModal>
            <LoginForm></LoginForm>
        </CSSReset>
    )

}

export default Login;