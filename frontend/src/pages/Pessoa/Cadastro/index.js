import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import Button from '@mui/material/Button';
import styles from './styles';

export default function PessoaCadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cep, setCep] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  //controle de erro
  const [nomeError, setNomeError] = useState('');
  const [idadeError, setIdadeError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [rgError, setRgError] = useState('');
  const [cepError, setCepError] = useState('');

  const enviarDadosFuncionario = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/pessoa/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Novo Funcionário Adicionado');
        exibirMensagemTemporaria('Funcionário adicionado com sucesso', 5000);
        // Limpar os campos após o envio bem-sucedido, se necessário
        setNome('');
        setIdade('');
        setCpf('');
        setRg('');
        setCep('');
      } else {
        console.error('Erro ao adicionar funcionário');
        exibirMensagemTemporaria('96#Erro ao adicionar Pessoa', 5000);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      exibirMensagemTemporaria('69#Erro ao adicionar Pessoa', 5000);
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
  
    // Validar idade NAO SE GUARDA IDADE EM BANDO DE DADO
    if (idade === '') {
      setIdadeError('Idade é obrigatória');
      valid = false;
    } else {
      setIdadeError('');
    }
  
    // Validar CPF
    if (cpf.replace(/[^0-9]/g, '').length !== 11) {
      setCpfError('CPF inválido');
      valid = false;
    } else {
      setCpfError('');
    }
  
    // Validar RG
    if (rg.replace(/[^0-9]/g, '').length !== 10) {
      setRgError('RG inválido');
      valid = false;
    } else {
      setRgError('');
    }
  
    // Validar CEP
    if (cep.replace(/[^0-9]/g, '').length !== 8) {
      setCepError('CEP inválido');
      valid = false;
    } else {
      setCepError('');
    }

    if (valid) {
      const data = { nome, idade, cpf, rg, cep };
      enviarDadosFuncionario(data);
    }
  };
  
  return (
    <>
    <Container style={styles.container}>
      <Paper style={styles.paper}>
        <TextField style={styles.textInput}
          id="nome" variant="outlined" 
          type="text" label="Nome" value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth required error={!!nomeError} helperText={nomeError}
        />

        <TextField style={styles.textInput} // NAO SE GUARDA IDADE EM BANDO DE DADOS 
          type="number" label="Idade" value={idade} 
          onChange={(e) => setIdade(e.target.value)}
          fullWidth required error={!!idadeError} helperText={idadeError}
        />

        <ReactInputMask
          mask="999.999.999-99"
          onChange={(e) => setCpf(e.target.value)}
          type="number" label="CPF" value={cpf}> 
            {() => <TextField style={styles.textInput} id="cpf" label="CPF" variant="outlined" fullWidth required error={!!cpfError} helperText={cpfError}/>}
        </ReactInputMask>

        <ReactInputMask
          mask="99.999.999-99"
          onChange={(e) => setRg(e.target.value)}
          type="number" label="RG" vaule={rg}>
            {() => <TextField style={styles.textInput} id="rg" label="RG" variant="outlined" fullWidth required error={!!rgError} helperText={rgError}/>}
        </ReactInputMask>
  
        <ReactInputMask
          mask="99999-999"
          onChange={(e) => setCep(e.target.value)}
          type="number" label="CEP" value={cep}>
            {() => <TextField style={styles.textInput} id="cep" label="CEP" variant="outlined" fullWidth required error={!!cepError} helperText={cepError}/>}
        </ReactInputMask>

        <Button style={styles.button} variant="contained" onClick={handleClick}>
          Salvar 
        </Button> {mensagem && <div>{mensagem}</div>}
      </Paper>
    </Container>
    </>
  );
} 
