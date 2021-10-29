import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
function Navbar() {
    return (
        <>
            <AppBar position="static" style={{backgroundColor:"#FF1493"}}>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer", backgroundColor:"#FF1493"}} >
                        <Typography variant="h5" color="inherit" >
                            BlOG PESSOAL
                        </Typography>
                    </Box>

                    <Box display="flex"  letterSpacing="30px" padding="60px" >
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                HOME
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" color="inherit">
                                POSTAGENS
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                TEMAS
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                CADASTRAR TEMA
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", padding:"left"}}>
                            <Typography variant="h6" color="inherit">
                                LOGOUT
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;