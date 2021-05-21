import { useMsal } from "@azure/msal-react";
import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { backend } from "../backend/Backend";
import { useAuthentication } from "../context/authentication";
import { msalLoginRequest } from '../msAuthConfig'
import './Login.css'

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const msalInstance = useMsal().instance;
    const authentication = useAuthentication();

    const loginCompleted = (userId, fullName) => {
        authentication.isAuthenticated = true;
        authentication.userId = userId;
        authentication.fullName = fullName;
        setLoggedIn(true);
    }

    const loginFailed = (errorMessage) => {
        setIsError(true);
        setErrorMessage(errorMessage);
    }

    const msalLogin = () => {
        msalInstance.acquireTokenPopup(msalLoginRequest).then(authResult => {
            var accessToken = authResult.accessToken;
            if (accessToken != null) {
                backend.oauthLogin(
                    'microsoft',
                    accessToken, 
                    () => {
                        loginCompleted(authResult.account.username, authResult.account.name);
                    }, (e) => {
                        loginFailed(e.toString());
                    }
                );                            
            }
        }).catch(e => {
            console.log(e);
        });
    }
    if (isLoggedIn) {
        return <Redirect to="/"/>;
    } 
    return (
        <div className="Login-Container">
            <div className="Login-Card">
                <div className="Login-Form">
                    <button id="Login_Submit" className="Login-Button-O365" onClick={msalLogin}>Sign In with O365</button>
                </div>
                { isError &&<div id="Login_Error" className="Login-Error">{errorMessage}</div> }
            </div>
        </div>
    );
}

export default Login;