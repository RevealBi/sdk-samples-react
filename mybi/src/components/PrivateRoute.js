import React from "react";
import { Redirect, Route } from 'react-router-dom';
import { useAuthentication } from "../context/authentication";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuthentication();
    return(
        <Route render={(props) =>
            isAuthenticated ? 
                (<Component {...rest}/>) :
                (<Redirect to="/login"/>)
        }
        />
      );
}
