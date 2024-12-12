import React from 'react';
import { Button, Grid2, Paper, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import '../index.css';

export const Login = () => {

    const title = {fontSize: "3.5rem", fontWeight: "600", color: "#545454"};
    const tagline = {color: "#545454" , marginBottom: 0};
    const paperStyle = { padding: "2rem", margin: "50px auto", borderRadius: "1rem", boxShadow: "5px 5px 25px" , width: "80%", maxWidth: "400px"};
    const heading = { fontSize: "1.5rem", fontWeight: "600", color: "#545454" };
    const row = { display: "flex", marginTop: "2rem" };
    const p = { marginLeft: "20px", color: "#545454" };
    const div = {display: "flex" , justifyContent: "space-around"};

  return (
    <>
            <Grid2 align="center">
                <Typography style={title}>EcoGuard</Typography>
                <p style={tagline}>Discover Pollution Trends at Cavite State University Indang Campus</p>
                <Paper style={paperStyle} >
                    <form>
                        <Typography style={heading}><strong>Log In</strong></Typography>
                        <TextField className="inputField" style={row} label="Enter Email" type='email' required></TextField>
                        <TextField className="inputField" fullWidth style={row} label="Enter Password" type='password' required></TextField>
                        <Button className="btn" variant="contained" fullWidth>Log In</Button>
                        <div style={div}>
                            <p style={p}><strong>Already have an Account?</strong></p>
                            <Button className="linkBtn" color='success' variant='contained' to="/signup" component={Link}>Sign Up</Button>
                        </div>
                    </form>
                </Paper>
            </Grid2>
        </>
  )
}
