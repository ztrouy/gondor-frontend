import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { useNavigate } from "react-router-dom"
import useAuthorizationProvider from "../shared/hooks/authorization/useAuthorizationProvider.jsx"

export const NavBar = () => {
    const { loggedInUser, setLoggedInUser } = useAuthorizationProvider()
    const navigate = useNavigate()
    
    const handleLogout = () => {
        localStorage.removeItem("gondor_token")
        setLoggedInUser(null).then(() => navigate("/login"))
    }
    
    return (
        <AppBar position="sticky">
            <Toolbar disableGutters sx={{justifyContent: "flex-end", pr: 1}}>
                <Box flexGrow={1}>
                    <Button variant="text" href="/" sx={{color: "white"}}>
                        Gondor
                    </Button>
                </Box>
                {loggedInUser?.roles.includes("Patient") && (
                    <>
                        <Button variant="text" href="/appointments" sx={{color: "white"}}>
                            Appointments
                        </Button>
                        <Button variant="text" href="/records" sx={{color: "white"}}>
                            Records
                        </Button>

                    </>
                )}
                {loggedInUser?.roles.includes("Receptionist") && (
                    <>
                        <Button variant="text" href="/appointments" sx={{color: "white"}}>
                            Schedule
                        </Button>
                        <Button variant="text" href="/appointments/pending" sx={{color: "white"}}>
                            Pending
                        </Button>
                        <Button variant="text" href="/patients" sx={{color: "white"}}>
                            Patients
                        </Button>
                    </>
                )}
                {loggedInUser?.roles.includes("Clinician") && (
                    <>
                        <Button variant="text" href="/patients" sx={{color: "white"}}>
                            Patients
                        </Button>
                        <Button variant="text" href="/records" sx={{color: "white"}}>
                            Records
                        </Button>
                    </>
                )}
                {loggedInUser?.roles.includes("Administrator") && (
                    <>
                        <Button variant="text" href="/logs" sx={{color: "white"}}>
                            Logs
                        </Button>
                        <Button variant="text" href="/users" sx={{color: "white"}}>
                            Users
                        </Button>
                    </>
                )}
                {loggedInUser ? (
                    <>
                        <Button variant="text" href="/account" sx={{color: "white"}}>
                            Account
                        </Button>
                        <Button onClick={() => handleLogout()} variant="text" href="/login" sx={{color: "white"}}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <Button variant="text" href="/register" sx={{color: "white"}}>
                            Register
                        </Button>
                        <Button variant="text" href="/login" sx={{color: "white"}}>
                            Login
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar