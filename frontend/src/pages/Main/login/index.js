import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import styles from '../../../components/form_style';


export default function Login() {


  return (
    <Container style={styles.container}>
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', width: 300 }}>
        <form noValidate autoComplete='off'>
          <TextField style={styles.textInput} id="standard-basic" label="Login" variant="standard" />
          <TextField style={styles.textInput} id="standard-basic" label="Senha" variant="standard" />
        </form>
      </Paper>
    </Container>
  );
}
