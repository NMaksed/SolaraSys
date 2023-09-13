import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import Button from '@mui/material/Button';
import styles from './style';

export default function EmpresaCadastro() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [uf, setUf] = useState('');
  const [cep, setCep] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [nomeError, setNomeError] = useState('');
  const [numeroError, setNumeroError] = useState('');
  const [cidadeError, setCidadeError] = useState('');
  const [ruaError, setRuaError] = useState('');
  const [cnpjError, setCnpjError] = useState('');
  const [ufError, setUfError] = useState('');
  const [cepError, setCepError] = useState('');

  const enviarDadosFuncionario = async (data) => {
        try {
        const response = await fetch('http://localhost:8080/empresa/salvar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('Novo Empresa Adicionado');
            exibirMensagemTemporaria('Empresa adicionado(a) com sucesso', 5000);
            // Limpar os campos após o envio bem-sucedido, se necessário
            setNome('');
            setNumero('');
            setCidade('');
            setRua('');
            setCnpj('');
            setUf('');
            setCep('');
        } else {
            console.error('Erro ao adicionar empresa');
            exibirMensagemTemporaria('96#Erro ao adicionar empresa', 5000);
        }
        } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
        exibirMensagemTemporaria('69#Erro ao adicionar empresa', 5000);
        }
     };

    function exibirMensagemTemporaria(mensagem, tempo) {
        setMensagem(mensagem);
        setTimeout(() => {
        setMensagem('');
        }, tempo);
    }

    const handleClick = (e) => {
        e.preventDefault()

        let valid = true;

        // Validar nome
        if (nome.trim() === '') {
        setNomeError('Nome é obrigatório');
        valid = false;
        } else {
        setNomeError('');
        }

        // Validar número
        if (numero.trim() === '') {
        setNumeroError('Número é obrigatório');
        valid = false;
        } else {
        setNumeroError('');
        }

        // Validar cidade
        if (cidade.trim() === '') {
        setCidadeError('Cidade é obrigatória');
        valid = false;
        } else {
        setCidadeError('');
        }

        // Validar rua
        if (rua.trim() === '') {
        setRuaError('Rua é obrigatória');
        valid = false;
        } else {
        setRuaError('');
        }

        // Validar CNPJ
        const strippedCnpj = cnpj.replace(/[^0-9]/g, '');
        if (strippedCnpj.length !== 14) {
        setCnpjError('CNPJ inválido');
        valid = false;
        } else {
        setCnpjError('');
        }

        // Validar UF
        if (uf.trim() === '') {
        setUfError('UF é obrigatória');
        valid = false;
        } else {
        setUfError('');
        }

        // Validar CEP
        const strippedCep = cep.replace(/[^0-9]/g, '');
        if (strippedCep.length !== 8) {
        setCepError('CEP inválido');
        valid = false;
        } else {
        setCepError('');
        }
        if (valid) {
            const data = { nome, numero, cidade, rua, cnpj, uf, cep };
            console.log(data)
            enviarDadosFuncionario(data);
        }
    };


    return (
        <Container style={styles.container}>
        <Paper style={styles.paper}>
            <TextField style={styles.textInput}
            label="Nome" value={nome} type="text" variant="outlined"
            onChange={(e) => setNome(e.target.value)}
            fullWidth required error={!!nomeError} helperText={nomeError}
            />

            <TextField style={styles.textInput}
            label="Número" value={numero} type="number" variant="outlined"
            onChange={(e) => setNumero(e.target.value)}
            fullWidth required error={!!numeroError} helperText={numeroError}
            />

            <TextField style={styles.textInput}
            label="Cidade" value={cidade} type="text" variant="outlined"
            onChange={(e) => setCidade(e.target.value)}
            fullWidth required error={!!cidadeError} helperText={cidadeError}
            />

            <TextField style={styles.textInput} 
            label="Rua" value={rua} type="text" variant="outlined"
            onChange={(e) => setRua(e.target.value)} 
            fullWidth required error={!!ruaError} helperText={ruaError}
            />

            <ReactInputMask
            mask="99.999.999/9999-99"
            onChange={(e) => setCnpj(e.target.value)}
            type="number" label="CNPJ" value={cnpj}>
                {() => <TextField style={styles.textInput} id="cnpj" label="CNPJ" variant="outlined" fullWidth required error={!!cnpjError} helperText={cnpjError}/>}
            </ReactInputMask>

            <TextField style={styles.textInput} 
            label="UF" value={uf} type="text" variant="outlined"
            onChange={(e) => setUf(e.target.value)}
            fullWidth required  error={!!ufError} helperText={ufError}
            />

            <ReactInputMask
            mask="99999-999"
            onChange={(e) => setCep(e.target.value)}
            type="number" label="CEP" value={cep}>
                {() => <TextField style={styles.textInput} id="cep" label="CEP" variant="outlined" fullWidth required  error={!!cepError} helperText={cepError}/>}
            </ReactInputMask>


            <Button style={styles.button} variant="contained" onClick={handleClick}>
                Salvar
            </Button> {mensagem && <div>{mensagem}</div>}
        </Paper>
        </Container>
    );
}
