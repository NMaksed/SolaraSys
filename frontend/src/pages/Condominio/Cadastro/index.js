import React, { useState } from 'react';
import { Container, Paper } from '@mui/material';
import CustomButton from '../../../components/Form/CustomButton';
import styles from '../../../components/Styles/FormsStyles';
import { useSnackbar } from 'notistack';
import TextField from '@mui/material/TextField';

import piscinaIcon from '../../../components/Styles/piscina.png';
import churrasqueiraIcon from '../../../components/Styles/churrasqueira.png';
import salaoIcon from '../../../components/Styles/balao-de-ar.png';
import CheckboxGroup from '../../../components/CheckboxGroup/index';


export default function MoradorCadastro() {
  const [nome, setNome] = useState('');
  const [piscina, setPiscina] = useState(false);
  const [churrasqueira, setChurrasqueira] = useState(false);
  const [salao, setSalao] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const [nomeError, setNomeError] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    let valid = true;

    if (nome.trim() === '') {
      setNomeError('Campo obrigatório');
      valid = false;
    } else {
      setNomeError('');
    }

    if (valid) {
      const data = { nome, piscina, churrasqueira, salao };
      enviarDadosMorador(data);
    }
  };

  const enviarDadosMorador = async (data) => {
    try {
      const response = await fetch(`http://localhost:8080/condominio/salvar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Novo Condominio Adicionado');
        enqueueSnackbar('Novo Condominio Adicionado', { variant: 'success' });
        // Limpar os campos após o envio bem-sucedido, se necessário
        setNome('');
        setPiscina(false);
        setChurrasqueira(false);
        setSalao(false);
      } else {
        console.error('Erro ao adicionar Condominio');
        enqueueSnackbar('Erro ao adicionar Condominio', { variant: 'error' });
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      enqueueSnackbar('Problema ao se conectar com o servidor', { variant: 'error' });
    }
  };

  return (
    <Container style={styles.Container}>
      <Paper elevation={3} style={styles.Paper}>
        <TextField
          style={styles.TextField}
          id="nome"
          variant="outlined"
          type="text"
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
          required
          error={!!nomeError}
          helperText={nomeError}
        />

        <CheckboxGroup
          label="Coisinhas"
          options={[
            {
              label: 'Piscina',
              value: piscina,
              onChange: (value) => setPiscina(value),
              icon: piscinaIcon, // Provide the image source
            },
            {
              label: 'Churrasqueira',
              value: churrasqueira,
              onChange: (value) => setChurrasqueira(value),
              icon: churrasqueiraIcon, // Provide the image source
            },
            {
              label: 'Salão',
              value: salao,
              onChange: (value) => setSalao(value),
              icon: salaoIcon, // Provide the image source
            },
          ]}
        />

        <CustomButton onClick={handleClick} />
      </Paper>
    </Container>
  );
}