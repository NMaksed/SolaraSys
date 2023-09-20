import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography, FormControl } from '@mui/material';
import styles from '../../../components/Form/styles';


export default function Login() {

  const handleClick = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui😎
  };

  return (
    <Container style={styles.container}>
      <Paper style={{ padding: '20px', display: 'flex', flexDirection: 'column', width: 300 }}>
        <Typography variant="h5" gutterBottom>
          Login ;OFF FALTA CONFIGURAR O fetch
        </Typography>
        <FormControl noValidate autoComplete='off' onSubmit={handleClick}>
          <TextField style={styles.textInput} id="standard-basic" label="Usuário" variant="standard" fullWidth />
          <TextField style={styles.textInput} id="standard-basic" label="Senha" type="password" variant="standard" fullWidth />
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
            Entrar
          </Button>
        </FormControl>
      </Paper>
    </Container>
  );
}
