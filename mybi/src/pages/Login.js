import { useMsal } from "@azure/msal-react";
import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { backend } from "../backend/Backend";
import { msalLoginRequest } from '../msAuthConfig'
import './Login.css'

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");    
    const msalInstance = useMsal().instance;

    const usernamePasswordLogin = () => {
        backend.login(
            username, 
            password, 
            () => {
                setLoggedIn(true);
            }, (e) => {
                setIsError(true);
                setErrorMessage(e.toString());
            }
        );
    }
    const msalLogin = () => {
        msalInstance.acquireTokenPopup(msalLoginRequest).then(authResult => {
            var accessToken = authResult.accessToken;
            if (accessToken != null) {
                backend.oauthLogin(
                    'microsoft',
                    accessToken, 
                    () => {
                        setLoggedIn(true);
                    }, (e) => {
                        setIsError(true);
                        setErrorMessage(e.toString());
                    }
                );                            
            }
        }).catch(e => {
            console.log(e);
        });
    }
    const passwordOnKeyUp = (e) => {
        if (e.code === "Enter") {
            if (username !== null && username !== "" && password !== null && password !== "") {
                usernamePasswordLogin();
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
                    <button id="Login_Submit" className="Login-Button-O365" onClick={msalLogin}>Sign In with O365</button>
                    <input id="Login_Username_Input" className="Login-Input" type="username" value={username} onChange={e => {
                        setUsername(e.target.value);
                    }} placeholder="user name" />
                    <input id="Login_Password_Input" className="Login-Input" type="password" value={password} onChange={e => {
                        setPassword(e.target.value);
                    }} onKeyUp={passwordOnKeyUp} placeholder="password" />
                    <button id="Login_Submit" className="Login-Button" onClick={usernamePasswordLogin}>Sign In</button>
                </div>
                { isError &&<div id="Login_Error" className="Login-Error">{errorMessage}</div> }
            </div>
        </div>
    );
}

export default Login;