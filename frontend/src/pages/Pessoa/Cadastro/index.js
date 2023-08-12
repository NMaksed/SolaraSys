import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import styles from './style';
import Button from '@mui/material/Button';


export default function CadastroPessoa() {

  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [rg, setRg] = React.useState("");
  const [cep, setCep] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault()
    const data = { nome, idade, cpf, rg, cep }
    fetch("http://localhost:8080/pessoa/registro", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)  
    }).then(() =>{
      console.log("Novo Morador Adicionado")
    })
    console.log(data)
  }

  return (
    <>
      <Container style={styles.container}>
        <Paper elevation={3} style={styles.paper} >
          <TextField id="nome" label="Nome" variant="outlined" style={styles.text}
            value={nome} fullWidth
            onChange={(e) => setNome(e.target.value)} />
          <TextField id="idade" label="Idade" variant="outlined" style={styles.text}
            value={idade} fullWidth
            onChange={(e) => setIdade(e.target.value)} />
          <TextField id="cpf" label="CPF" variant="outlined" style={styles.text}
            value={cpf} fullWidth
            onChange={(e) => setCpf(e.target.value)} />
          <TextField id="rg" label="RG" variant="outlined" style={styles.text}
            value={rg} fullWidth
            onChange={(e) => setRg(e.target.value)} />
          <TextField id="cep" label="CEP" variant="outlined" style={styles.text}
            value={cep} fullWidth
            onChange={(e) => setCep(e.target.value)} />
          <Button variant="contained" onClick={handleClick}>
            Receba
          </Button>
        </Paper>
      </Container>
    </>
  );
}
