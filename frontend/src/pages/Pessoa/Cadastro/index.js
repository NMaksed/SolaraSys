import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { Container, Paper, TextField } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import CustomButton from '../../../components/Form/CustomButton';
import styles from '../../../components/Styles/FormsStyles';

export default function PessoaCadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cep, setCep] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  //controle de erro
  const [nomeError, setNomeError] = useState('');
  const [idadeError, setIdadeError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [rgError, setRgError] = useState('');
  const [cepError, setCepError] = useState('');

  //Validacao de dados
  const handleClick = (e) => {
    e.preventDefault()

    let valid = true;

    if (nome.trim() === '') {
      setNomeError('Campo obrigatório');
      valid = false;
    } else {
      setNomeError('');
    }

    if (idade === '') {
      setIdadeError('Idade é obrigatória');
      valid = false;
    } else {
      setIdadeError('');
    }

    if (cpf.replace(/[^0-9]/g, '').length !== 11) {
      setCpfError('CPF inválido');
      valid = false;
    } else {
      setCpfError('');
    }

    if (rg.replace(/[^0-9]/g, '').length !== 10) {
      setRgError('RG inválido');
      valid = false;
    } else {
      setRgError('');
    }

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
    
  const enviarDadosFuncionario = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/pessoa/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Pessoa registrada');
        enqueueSnackbar('Pessoa registrada', { variant: 'success' });
        // Limpar os campos após o envio bem-sucedido, se necessário
        setNome('');
        setIdade('');
        setCpf('');
        setRg('');
        setCep('');
      } else {
        console.error('Erro ao aregistrar pessoa');
        enqueueSnackbar('Erro ao registrar pessoa', { variant: 'error' });
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      enqueueSnackbar('Problema ao se conectar com o servidor', { variant: 'error' });
    }
  };

  return (
    <Container style={styles.Container}>
      <Paper style={styles.Paper}>
        <TextField style={styles.TextField}
          id="nome" variant="outlined" 
          type="text" label="Nome" value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth required  error={!!nomeError} helperText={nomeError} 
        />

        <TextField style={styles.TextField}
          type="number" label="Idade" value={idade} 
          onChange={(e) => setIdade(e.target.value)}
          fullWidth required error={!!idadeError} helperText={idadeError} 
        />

        <ReactInputMask
          mask="999.999.999-99"
          onChange={(e) => setCpf(e.target.value)}
          type="number" label="CPF" value={cpf}> 
            {() => <TextField style={styles.TextField} id="cpf" label="CPF" variant="outlined" fullWidth required error={!!cpfError} helperText={cpfError} />}
        </ReactInputMask>

        <ReactInputMask
          mask="99.999.999-99"
          onChange={(e) => setRg(e.target.value)}
          type="number" label="RG" vaule={rg}>
            {() => <TextField style={styles.TextField} id="rg" label="RG" variant="outlined" fullWidth required error={!!rgError} helperText={rgError} />}
        </ReactInputMask>
  
        <ReactInputMask
          mask="99999-999"
          onChange={(e) => setCep(e.target.value)}
          type="number" label="CEP" value={cep}>
            {() => <TextField style={styles.TextField} id="cep" label="CEP" variant="outlined" fullWidth required error={!!cepError} helperText={cepError}/>}
        </ReactInputMask>

        <CustomButton onClick={handleClick} />
      </Paper>
    </Container>
  );
} 