import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, FormHelperText } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import CustomButton from '../../../components/Form/CustomButton';
import styles from '../../../components/Styles/FormsStyles';
import { useSnackbar } from 'notistack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function MoradorCadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cep, setCep] = useState('');
  const [tipo, setTipo] = useState(''); // Initialize 'tipo' state
  const [representante, setRepresentante] = useState(false);
  const [exame, setExame] = useState(false);
  const [atribuido, setAtribuido] = useState(false);
  const [visitante, setVisitante] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const [nomeError, setNomeError] = useState('');
  const [idadeError, setIdadeError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [rgError, setRgError] = useState('');
  const [cepError, setCepError] = useState('');
  const [tipoError, setTipoError] = useState('');

  const handleRadioChange = (event) => {
    setTipo(event.target.value);
    const { name, value } = event.target;
    switch (name) {
      case 'representante':
        setRepresentante(value === 'rep');
        break;
      case 'atribuido':
        setAtribuido(value === 'atr');
        break;
      case 'visitante':
        setVisitante(value === 'vis');
        break;
      default:
        break;
    }
  };

  const handleClick = (e) => {
    e.preventDefault()

    let valid = true;

    if (nome.trim() === '') {
      setNomeError('Campo obrigatório');
      valid = false;
    } else {
      setNomeError('');
    }

    if (idade.trim() === '') {
      setIdadeError('Campo obrigatório');
      valid = false;
    } else {
      setIdadeError('');
    }

    if (cpf.trim() === '' || cpf.replace(/[^\d]/g, '').length !== 11) {
      setCpfError('CPF inválido');
      valid = false;
    } else {
      setCpfError('');
    }

    if (rg.trim() === '' || rg.replace(/[^\d]/g, '').length < 9) {
      setRgError('RG inválido');
      valid = false;
    } else {
      setRgError('');
    }

    if (cep.trim() === '' || cep.replace(/[^\d]/g, '').length !== 8) {
      setCepError('CEP inválido');
      valid = false;
    } else {
      setCepError('');
    }

    if (!representante && !atribuido && !visitante) {
      setTipoError('Selecione pelo menos uma opção');
      valid = false;
    } else {
      setTipoError('');
    }

    if (valid) {
      const data = { nome, idade, cpf, rg, cep, representante, exame, atribuido, visitante };
      enviarDadosMorador(data);
      console.log(data)
    }
  };

  const enviarDadosMorador = async (data) => {
    try {
      const response = await fetch(`http://localhost:8080/morador/salvar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Novo Morador Adicionado');
        enqueueSnackbar('Novo Morador Adicionado', { variant: 'success' });
        // Limpar os campos após o envio bem-sucedido, se necessário
        setNome('');
        setIdade('');
        setCpf('');
        setRg('');
        setCep('');
        setTipo('');
        setExame(false);
      } else {
        console.error('Erro ao adicionar Morador');
        enqueueSnackbar('Erro ao adicionar Morador', { variant: 'error' });
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      enqueueSnackbar('Problema ao se conectar com o servidor', { variant: 'error' });
    }
  };

  return (
    <>
      <Container style={styles.Container}>
        <Paper elevation={3} style={styles.Paper} >
          <TextField style={styles.TextField} 
            id="nome" variant="outlined" 
            type="text" label="Nome" value={nome}
            onChange={(e) => setNome(e.target.value)} 
            fullWidth required error={!!nomeError} helperText={nomeError} />

          <TextField style={styles.TextField}
            id="idade" variant="outlined" 
            type="number" label="Idade" value={idade}
            onChange={(e) => setIdade(e.target.value)}
            fullWidth required error={!!idadeError} helperText={idadeError} />
            
          <ReactInputMask 
            mask="999.999.999-99"
            onChange={(e) => setCpf(e.target.value)}
            type="number" label="CPF" value={cpf}>
            {() => <TextField style={styles.TextField} id="cpf" label="CPF" variant="outlined" fullWidth required error={!!cpfError} helperText={cpfError} /> }
          </ReactInputMask>

          <ReactInputMask
            mask="99.999.999-9"
            onChange={(e) => setRg(e.target.value)}
            type="number" label="RG" value={rg}>
            { () => <TextField style={styles.TextField} id="rg" label="RG" variant="outlined"  fullWidth required error={!!rgError} helperText={rgError} /> }
          </ReactInputMask>
          
          <ReactInputMask
            mask="99999-999"
            onChange={(e) => setCep(e.target.value)}
            type="number" value={cep}>
            { () => <TextField style={styles.TextField} id="cep" label="CEP" variant="outlined" fullWidth required error={!!cepError} helperText={cepError} /> }
          </ReactInputMask>

          <FormLabel id="demo-radio-buttons-group-label">Tipo</FormLabel>
          <RadioGroup
            style={{
              ...styles.RadioGroup,
              border: tipoError ? '1px solid red' : styles.RadioGroup.border,
            }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={tipo}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="rep"
              control={<Radio />}
              label="Representante"
            />
            <FormControlLabel
              value="atr"
              control={<Radio />}
              label="Atribuido"
            />
            <FormControlLabel
              value="vis"
              control={<Radio />}
              label="Visitante"
            />
          </RadioGroup>
          <FormHelperText style={{ margin:'3 14 16px ' }} error={!!tipoError}>{tipoError}</FormHelperText>

          <CustomButton onClick={handleClick} />
        </Paper>
      </Container>
    </>
  );
}