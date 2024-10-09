import { useContext } from "react";
import AuthorizationContext from "./authorizationContext.jsx";

const useAuthorizationProvider = () => {
    return useContext(AuthorizationContext)
}

export default useAuthorizationProvider