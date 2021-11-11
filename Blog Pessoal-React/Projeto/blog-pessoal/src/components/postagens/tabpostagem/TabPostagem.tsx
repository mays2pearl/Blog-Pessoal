import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@mui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered className='caixa3' onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Um pouco sobre mim:" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Um pouco sobre mim:</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Sou uma pessoa que sempre esta em busca de algo melhor, de ser uma pessoa melhor, por isso venho trilhando na minha vida profissional caminhos de sucesso e orgulho! Comecei trabalhando com vendas de produtos financeiros, migrei para vendas na área comercial/indústria interna, onde desenvolvi habilidades de negociação em vendas! Buscando crescer numa área profissional valorizada, que me proporcione uma condição financeira estável e confortável, e que conciliasse com algo que eu goste e com o qual eu tinha afinidade, iniciei meus estudos em programação e desenvolvimento de sistemas e aplicativos. Nessa área de tecnologia se destaca o curso de IOS Mobile na Digital House e o BootCamp java fullStack na Generation Brasil.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;