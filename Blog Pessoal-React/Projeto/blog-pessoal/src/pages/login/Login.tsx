import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={12} sm={6}>
                <Box paddingX={20}>
                    <form action="">
                        <Typography variant="h3" color="#dea8c6" gutterBottom component='h3' align='center' className='textos'>Entrar</Typography>
                        <TextField
                          id="usuario"
                          label="usuário"
                          variant='outlined'
                          name='usuario'
                          margin='normal'
                          fullWidth

                        />

                        <TextField
                          id="senha"
                          label="senha"
                          variant='outlined'
                          name='senha'
                          margin='normal'
                          type='password'
                          fullWidth
                        />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='home' className='text-decoration-none'>
                                <Button type='submit' variant='contained' color='primary' className='botao'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align='center' color="initial">
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom align='center' className='textos' color="initial">
                            Cadastre-se
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={12} sm={6} className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login