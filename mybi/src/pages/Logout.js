import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import { backend } from "../backend/Backend";

function Logout() {
    const [isLoggedOut, setLoggedOut] = useState(false);

    useEffect(() => {
        backend.logout(
            () => {
                setLoggedOut(true);
            }, (e) => {
                setLoggedOut(true);
            }
        )
    }, []);
    
    if (isLoggedOut) {
        return <Redirect to="/"/>;
    }
    return (
        <div>Logging out ...</div>
    );
}

export default Logout;