import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import axios from 'axios';

export const Signup = () => {
    const title = { fontSize: "3.5rem", fontWeight: "600", color: "#545454" };
    const tagline = { color: "#545454", marginBottom: 0 };
    const paperStyle = { padding: "2rem", margin: "50px auto", borderRadius: "1rem", boxShadow: "5px 5px 25px" };
    const heading = { fontSize: "1.5rem", fontWeight: "600", color: "#545454" };
    const row = { display: "flex", marginTop: "2rem" };
    const p = { marginLeft: "20px", color: "#545454" };
    const div = { display: "flex", justifyContent: "space-around" };

    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle signup form submission
    const handleSignUp = (e) => {
        e.preventDefault();

        // Axios POST request to the backend
        axios.post("http://localhost:3001/signup", { name, email, password })
            .then((response) => {
                if (response.status === 201) {
                    console.log("User created successfully.");
                    navigate("/login"); // Redirect to login on success
                }
            })
            .catch((err) => {
                // Handle known error (email already exists)
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    // Log unexpected errors
                    console.error(err);
                }
            });
    };

    return (
        <>
            <Grid align="center">
                <Typography style={title}>EcoGuard</Typography>
                <p style={tagline}>Discover Pollution Trends at Cavite State University Indang Campus</p>
                <Paper
                    style={paperStyle}
                    sx={{
                        width: {
                            xs: "80vw",
                            sm: "50vw",
                            md: "40vw",
                            lg: "30vw",
                            xl: "20vw"
                        },
                        height: '50vh'
                    }}
                >
                    <form onSubmit={handleSignUp}>
                        <Typography style={heading}><strong>Sign Up</strong></Typography>
                        <TextField
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                            required
                            className="inputField"
                            style={row}
                            label="Enter Name"
                            type="text"
                        />
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            required
                            className="inputField"
                            style={row}
                            label="Enter Email"
                            type="email"
                        />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            required
                            className="inputField"
                            fullWidth
                            style={row}
                            label="Enter Password"
                            type="password"
                        />
                        <Button className="btn" type="submit" variant="contained" fullWidth>Sign Up</Button>
                        <div style={div}>
                            <p style={p}><strong>Already have an Account?</strong></p>
                            <Button
                                className="linkBtn"
                                color="success"
                                variant="contained"
                                to="/login"
                                component={Link}
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </>
    );
};


