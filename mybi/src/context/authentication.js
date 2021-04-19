import { createContext, useContext } from 'react';

export const AuthenticationContext = createContext();

export const useAuthentication = () => {
    return useContext(AuthenticationContext);
}