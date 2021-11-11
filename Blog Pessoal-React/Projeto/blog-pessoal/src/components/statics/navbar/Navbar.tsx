import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useHistory } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';
function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info("Usuário deslogado", {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme:'colored',
            progress: undefined,

        })
        history.push('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#FF1493" }}>
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
    }
        return (
            <>
                {navbarComponent}
            </>
        )
    }


    export default Navbar;