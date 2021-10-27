import React from 'react';
import {Box, Button} from '@material-ui/core';
import {Typography, Grid} from '@material-ui/core';
import './Home.css';

function Home(){
    return (
        <>
<Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "pink" }}>
<Grid alignItems="center" item xs={6}>
    <Box paddingX={20} >
        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
</Box>

     <Box display="flex" justifyContent="center">
         <Box marginRight={1}>
         </Box>
         <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#FF1493", color: "white" }}>Ver Postagens</Button>
     </Box>
 </Grid>
 <Grid item xs={6} >
     <img src="https://cdn.discordapp.com/attachments/882496817550483510/902791004803989525/flores.png" alt="" width="500px" height="500px"/>
 </Grid>
 <Grid xs={12} style={{ backgroundColor: "white" }}>
 </Grid>
</Grid>
</>
);
}
export default Home;