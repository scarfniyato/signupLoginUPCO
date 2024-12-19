import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

export const Login = () => {

    const title = { fontSize: "3.5rem", fontWeight: "600", color: "#545454" };
    const tagline = { color: "#545454", marginBottom: 0 };
    const paperStyle = { padding: "2rem", margin: "50px auto", borderRadius: "1rem", boxShadow: "5px 5px 25px", width: "80%", maxWidth: "400px" };
    const heading = { fontSize: "1.5rem", fontWeight: "600", color: "#545454" };
    const row = { display: "flex", marginTop: "2rem" };
    const p = { marginLeft: "20px", color: "#545454" };
    const div = { display: "flex", justifyContent: "space-around" };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/login", { email, password })
            .then((result) => {
                if (result.data === "Success") {
                    navigate("/home"); // Redirect to /home on success
                } else {
                    alert("Login failed: User does not exist.");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <Grid align="center">
                <Typography style={title}>EcoGuard</Typography>
                <p style={tagline}>Discover Pollution Trends at Cavite State University Indang Campus</p>
                <Paper style={paperStyle}>
                    <form onSubmit={handleLogin}>
                        <Typography style={heading}><strong>Log In</strong></Typography>
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            className="inputField"
                            style={row}
                            label="Enter Email"
                            type="email"
                            required
                        />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            className="inputField"
                            style={row}
                            label="Enter Password"
                            type="password"
                            required
                        />
                        <Button
                            type="submit"
                            className="btn"
                            variant="contained"
                            fullWidth>
                            Log In
                        </Button>
                        <div style={div}>
                            <p style={p}><strong>Don't have an Account?</strong></p>
                            <Button
                                className="linkBtn"
                                color="success"
                                variant="contained"
                                to="/signup"
                                component={Link}>
                                Sign Up
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </>
    );
};

