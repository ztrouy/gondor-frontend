import { useState } from "react";
import { register } from "../managers/authManager.js";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import useAuthorizationProvider from "../shared/hooks/authorization/useAuthorizationProvider.jsx";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const [passwordMismatch, setPasswordMismatch] = useState();

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const {setLoggedInUser} = useAuthorizationProvider()

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordMismatch(true);
        } else {
            const newUser = {
                firstName,
                lastName,
                dateOfBirth,
                email,
                password,
            };

            register(newUser).then((user) => {
                if (user.errors) {
                    setErrors(user.errors);
                } else {
                    setLoggedInUser(user);
                    navigate("/");
                }
            });
        }
    };

    return (
        <Container sx={{display: "flex", justifyContent: "center"}}>
            <Paper elevation={5} sx={{mt: 5, p: 3, width: 1, maxWidth: "600px"}}>
                <Box 
                    component={"form"} 
                    onSubmit={handleSubmit} 
                    sx={{display: "flex", flexDirection: "column", gap: 2}}
                    autoComplete="off"
                >
                    <Typography variant="h3">Sign Up</Typography>
                    <TextField
                        type="text"
                        required
                        value={firstName}
                        label="First Name"
                        onChange={e => {
                            setFirstName(e.target.value)
                        }}
                    />
                    <TextField
                        type="text"
                        required
                        value={lastName}
                        label="Last Name"
                        onChange={e => {
                            setLastName(e.target.value)
                        }}
                    />
                    <TextField
                        type="date"
                        required
                        value={dateOfBirth}
                        label="Date of Birth"
                        InputLabelProps={{shrink: true}}
                        onChange={e => {
                            setDateOfBirth(e.target.value)
                        }}
                    />
                    <TextField
                        type="text"
                        required
                        value={email}
                        label="Email"
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                    <TextField
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
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
                        error={passwordMismatch}
                        onChange={e => {
                            setPasswordMismatch(false)
                            setPassword(e.target.value)
                        }}
                    />
                    <TextField
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={confirmPassword}
                        label="Confirm Password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        error={passwordMismatch}
                        helperText={passwordMismatch ? "Passwords do not match!" : ""}
                        onChange={e => {
                            setPasswordMismatch(false)
                            setConfirmPassword(e.target.value)
                        }}
                    />
                    <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                        <Button disabled={passwordMismatch} variant="contained" type="submit">
                            Register
                        </Button>
                    </Box>
                    {errors.map((e, i) => (
                        <Typography key={i} color={"red"}>
                            {e}
                        </Typography>
                    ))}
                    <Typography textAlign={"center"}>
                        Already have an account? Log in <Link to="/login">here!</Link>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default Register