import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import styles from './styles';
import Button from '@mui/material/Button';


export default function FuncionarioCadastro() {

    const [nome, setNome] = React.useState("");
    const [idade, setIdade] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [rg, setRg] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [funcao, setFuncao] = React.useState("");
    const [salario, setSalario] = React.useState("");

    const handleClick = (e) => {
        e.preventDefault()
        const data = { nome, idade, cpf, rg, cep }
        fetch("http://localhost:8080/funcionario/salvar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Novo Morador Adicionado")
        })
        console.log(data)
    }

    return (
        <>
            <Container style={styles.container}>
                <Paper elevation={3} style={styles.paper} >
                    <TextField id="nome" label="Nome" variant="outlined" style={styles.text}
                        value={nome} fullWidth required
                        onChange={(e) => setNome(e.target.value)} />
                    <TextField id="idade" label="Idade" variant="outlined" style={styles.text}
                        value={idade} fullWidth required
                        onChange={(e) => setIdade(e.target.value)} />
                    <TextField id="cpf" label="CPF" variant="outlined" style={styles.text}
                        value={cpf} fullWidth required
                        onChange={(e) => setCpf(e.target.value)} />
                    <TextField id="rg" label="RG" variant="outlined" style={styles.text}
                        value={rg} fullWidth required
                        onChange={(e) => setRg(e.target.value)} />
                    <TextField id="cep" label="CEP" variant="outlined" style={styles.text}
                        value={cep} fullWidth
                        onChange={(e) => setCep(e.target.value)} />
                        <TextField id="funcao" label="Função" variant="outlined" style={styles.text}
                            value={funcao} fullWidth required
                            onChange={(e) => setFuncao(e.target.value)} />
                        <TextField id="salario" label="Salário" type="number" variant="outlined" style={styles.text}
                            value={salario} fullWidth required 
                            onChange={(e) => setSalario(e.target.value)}/>
                    <Button variant="contained" onClick={handleClick} style={styles.botao}>
                        Salvar
                    </Button>
                </Paper>
            </Container>
        </>
    );
}
