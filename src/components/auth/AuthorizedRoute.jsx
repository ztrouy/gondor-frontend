import { Navigate, Outlet } from "react-router-dom";
import useAuthorizationProvider from "../../shared/hooks/authorization/useAuthorizationProvider.jsx";


// This component returns a Route that either display the prop element or navigates to the login
// If roles are provided, the route will require:
    // All of the roles when all is true
    // Or any of the roles when all is false
export const AuthorizedRoute = ({ roles, all }) => {
    const { loggedInUser } = useAuthorizationProvider()
    
    let authed = false;
    if (loggedInUser) {
        if (roles && roles.length) {
            authed = all
                ? roles.every((r) => loggedInUser.roles.includes(r))
                : roles.some((r) => loggedInUser.roles.includes(r));
        } else {
            authed = true;
        }
    }

    return authed ? <Outlet /> : <Navigate to="/login" />;
};
