import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#FF1493" }}>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer", backgroundColor: "#FF1493" }}>
                        <Typography className="fontes" variant="h4" color="inherit" >
                            BLOG PESSOAL
                        </Typography>
                    </Box>

                    <Box ml="auto" className="colorText">
                        <Button >
                            <Typography variant="h6" color="white">
                                HOME
                            </Typography></Button>
                        <Button>
                            <Typography variant="h6" color="white"> 
                            POSTAGENS </Typography></Button>
                        <Button><Typography variant="h6" color="white">
                            TEMAS
                        </Typography></Button>
                        <Button> <Typography variant="h6" color="white">
                            LOGOUT
                        </Typography></Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;