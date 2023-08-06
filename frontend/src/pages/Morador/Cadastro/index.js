import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, makeStyles } from '@mui/material';


export default function MoradorCadastro() {
    const paperStyle={ padding: "50px 20px", margin:"20px auto", width: 600 }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Container>
        <Paper elevation={3} style={paperStyle}
      <TextField id="nome" label="Nome" variant="outlined" />
      <TextField id="idade" label="Idade" variant="outlined" />
      <TextField id="cpf" label="CPF" variant="outlined" />
      <TextField id="rg" label="RG" variant="outlined" />
      <TextField id="cep" label="CEP" variant="outlined" />
      <TextField id="morador" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Container>
    </Box>
  );
}
