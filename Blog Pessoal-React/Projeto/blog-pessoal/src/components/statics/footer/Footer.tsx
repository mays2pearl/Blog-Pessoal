import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@mui/material';
import { GitHub, WhatsApp } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
        );

        var footerComponent;
        if(token != ""){
            footerComponent= <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box style={{ backgroundColor: "#FF1493", height: "120px" }}>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Contate - me </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/mays2pearl" target="_blank">
                            <GitHub style={{ fontSize: 50, color: "white" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/maysa-andrade-maysa-andrade/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511961787592" target="_blank">
                            <WhatsApp style={{ fontSize: 60, color: "white" }} />
                        </a>
                    </Box>
                </Box>
                <Box style={{ backgroundColor: "#FF1493", height: "60px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2021 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=maysas2perola@gmail.com">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Maysa Andrade</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        }
    return (
        <>
           {footerComponent}
        </>
    )
}

export default Footer;