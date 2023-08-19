import React,{ useState } from "react";
import { CSSReset } from "../components/CSSReset/CSSReset";
import CreateUserForm from "../components/CreateUserForm/index.js";
import HeaderUserPage from "../components/HeaderUserPage/index.js";
import PopUpModal from "../components/PopUpModal/index.js"

const CreateUser = ()=>{

    const [viewPopUp,setViewPopUp] = useState(false);
    const [warning,setWarning] = useState("")

    return (
        <CSSReset>
            <PopUpModal viewPopUp={viewPopUp} setViewPopUp={setViewPopUp} warning={warning}></PopUpModal>
            <HeaderUserPage></HeaderUserPage>           
            <CreateUserForm warning={warning} setWarning={setWarning} setViewPopUp={setViewPopUp}></CreateUserForm>
        </CSSReset>
    )

}

export default CreateUser