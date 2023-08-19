import React from "react";
import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Login from "./pages/Login.js";
import CreateUser from "./pages/CreateUser.js";

function App(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/createUser" element={<CreateUser/>}/>
        </Routes>
    )
}

export default App;