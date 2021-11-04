import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();
    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        history.push('/login')
    }
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#FF1493" }}>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer", backgroundColor: "#FF1493" }}>
                        <Typography className="fontes" variant="h4" color="inherit" >
                            BLOG PESSOAL
                        </Typography>
                    </Box>

                    <Box ml='auto' display="flex">
                        <Link to='/home' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                HOME
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/posts' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                POSTAGENS
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='temas' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                TEMAS
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                CADASTRAR TEMA
                            </Typography>
                        </Box>
                        </Link>
                        
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    LOGOUT
                                </Typography>
                            </Box>
                        
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )}

export default Navbar;