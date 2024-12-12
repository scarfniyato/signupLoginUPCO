import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Logout } from './Logout';
import '../index.css';

export const Navbar = () => {
    const button = {marginRight: '20px', fontSize: '1.2rem'}
    return (
        <>
            <AppBar className='navBar' sx={{ backgroundColor: '#519434' }}>
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>404 Gov Not Found</Typography>
                    <Button style={button} color='success' variant='contained' to="/login" component={Link}>Login</Button>
                    <Button style={button} color='success' variant='contained' to="/signup" component={Link}>Signup</Button>
                    <Logout />
                </Toolbar>
            </AppBar>
        </>
    )
}
