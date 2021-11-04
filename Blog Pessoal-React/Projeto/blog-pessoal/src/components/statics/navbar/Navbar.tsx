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

                    <Box ml='auto' display="flex" justifyContent="flex">
                    <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                HOME
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
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
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    LOGOUT
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )}

export default Navbar;