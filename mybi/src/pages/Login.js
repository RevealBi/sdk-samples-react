import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { backend } from "../backend/Backend";
import './Login.css'

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");    

    const postLogin = () => {
        backend.login(
            username, 
            password, 
            () => {
                setLoggedIn(true);
            }, (e) => {
                setIsError(true);
                setErrorMessage(e.toString());
            }
        )
    }
    const passwordOnKeyUp = (e) => {
        if (e.code === "Enter") {
            if (username !== null && username !== "" && password !== null && password !== "") {
                postLogin();
            }
        }
    }
    if (isLoggedIn) {
        return <Redirect to="/"/>;
    }
    return (
        <div className="Login-Container">
            <div className="Login-Card">
                <div className="Login-Form">
                    <input id="Login-Username-Input" className="Login-Input" type="username" value={username} onChange={e => {
                        setUsername(e.target.value);
                    }} placeholder="user name" />
                    <input id="Login-Password-Input" className="Login-Input" type="password" value={password} onChange={e => {
                        setPassword(e.target.value);
                    }} onKeyUp={passwordOnKeyUp} placeholder="password" />
                    <button id="Login-Submit" className="Login-Button" onClick={postLogin}>Sign In</button>
                </div>
                { isError &&<div className="Login-Error">{errorMessage}</div> }
            </div>
        </div>
    );
}

export default Login;