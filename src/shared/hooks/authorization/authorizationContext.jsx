import { createContext } from "react";

export const AuthorizationContext = createContext({
    loggedInUser: {},
    setLoggedInUser: () => {}
})

export default AuthorizationContext