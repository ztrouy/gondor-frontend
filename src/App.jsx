import { useEffect } from "react";
import { authenticateUser } from "./managers/authManager";
import NavBar from "./components/NavBar";
import ApplicationViews from "./components/ApplicationViews";
import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import baseTheme from "./shared/hooks/theme/baseTheme.jsx";
import useAuthorizationProvider from "./shared/hooks/authorization/useAuthorizationProvider.jsx";

const App = () => {
    const { loggedInUser, setLoggedInUser } = useAuthorizationProvider()

    useEffect(() => {
        // user will be null if not authenticated
        if (localStorage.getItem("gondor_token")) {
            authenticateUser().then((user) => {
                if (user === null) {
                    localStorage.removeItem("gondor_token")
                }
                
                setLoggedInUser(user);
            });
        } else {
            setLoggedInUser(null)
        }
    }, []);

    // wait to get a definite logged-in state before rendering
    if (loggedInUser === undefined) {
        return <CircularProgress />;
    }

    return (
        <ThemeProvider theme={baseTheme}>
            <CssBaseline>
                <NavBar/>
                <ApplicationViews/>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
