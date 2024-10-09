import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../managers/authManager.js";
import { Box, Button, Container, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import useAuthorizationProvider from "../shared/hooks/authorization/useAuthorizationProvider.jsx";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const [failedLogin, setFailedLogin] = useState(false);

    const { setLoggedInUser } = useAuthorizationProvider()

    const handleSubmit = (e) => {
        e.preventDefault();
        login({email, password}).then((user) => {
        if (!user) {
            setFailedLogin(true);
        } else {
            setLoggedInUser(user);
            navigate("/");
        }
        });
    };

    return (
        <Container sx={{display: "flex", justifyContent: "center"}}>
            <Paper elevation={5} sx={{mt: 5, p: 3, width: 1, maxWidth: "600px"}}>
                <Box component={"form"} autoComplete="off" onSubmit={handleSubmit} sx={{display: "flex", flexDirection: "column", gap: 2}}> 
                    <Typography variant="h3">Login</Typography>
                    <TextField 
                        required
                        type="text"
                        label="Email"
                        value={email}
                        onChange={e => {
                            setFailedLogin(false)
                            setEmail(e.target.value)}
                        }
                    />
                    <TextField
                        required
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        value={password}
                        onChange={ e => {
                            setFailedLogin(false)
                            setPassword(e.target.value)
                        }}
                        error={failedLogin}
                        helperText={failedLogin ? "Login failed" : ""}
                    />
                    <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                        <Button variant="contained" type="submit">
                            Login
                        </Button>
                    </Box>
                    <Typography textAlign={"center"}>
                        No signed up? Register <Link to="/register">here!</Link>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default Login