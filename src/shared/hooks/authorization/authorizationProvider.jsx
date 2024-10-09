import { useState } from "react";
import AuthorizationContext from "./authorizationContext.jsx";

const AuthorizationProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState()

    const authorizationContext = {
        loggedInUser: loggedInUser,
        setLoggedInUser: setLoggedInUser
    }

    return (
        <AuthorizationContext.Provider value={authorizationContext}>
            {children}
        </AuthorizationContext.Provider>
    )
}

export default AuthorizationProvider