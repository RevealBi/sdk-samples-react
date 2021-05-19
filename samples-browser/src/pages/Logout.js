import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import { backend } from "../backend/Backend";
import { useAuthentication } from "../context/authentication";

function Logout(props) {
    const [isLoggedOut, setLoggedOut] = useState(false);
    const authentication = useAuthentication();

    useEffect(() => {
        const completeLogout = () => {
            setLoggedOut(true);
            if (props.onLogout) {
                props.onLogout();
            }
        }
        backend.logout(
            () => {
                completeLogout();
            }, (e) => {
                completeLogout();
            }
        )
    }, [authentication, props]);
    
    if (isLoggedOut) {
        return <Redirect to="/"/>;
    }
    return (
        <div>Logging out ...</div>
    );
}

export default Logout;