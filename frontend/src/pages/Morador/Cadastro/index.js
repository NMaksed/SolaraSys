import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import CustomButton from '../../../components/Form/CustomButton';
import styles from '../../../components/Styles/FormsStyles';
import { useSnackbar } from 'notistack';
import MenuItemCondominio from '../../../components/Form/MenuItemCondominio';

export default function MoradorCadastro() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cep, setCep] = useState('');
  const [representante, setRepresentante] = useState(false);
  const [atribuido, setAtribuido] = useState(false);
  const [visitante, setVisitante] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const [nomeError, setNomeError] = useState('');
  const [idadeError, setIdadeError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [rgError, setRgError] = useState('');
  const [cepError, setCepError] = useState('');
  const [representanteError, setRepresentanteError] = useState(false);
  const [atribuidoError, setAtribuidoError] = useState(false);
  const [visitanteError, setVisitanteError] = useState(false);


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

    if (representante === null) {
      setRepresentanteError("Campo inválido");
      valid = false;
    } else {
      setRepresentanteError(null);
    }

    if (valid) {
      const data = { nome, idade, cpf, rg, cep, };
     //enviarDadosMorador(data);
      console.log(data)
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
            fullWidth required error={!!nomeError} helperText={nomeError} 
            />

          <TextField style={styles.TextField}
            id="idade" variant="outlined" 
            type="number" label="Idade" value={idade}
            onChange={(e) => setIdade(e.target.value)}
            fullWidth required error={!!idadeError} helperText={idadeError} 
          />
            
          <ReactInputMask 
            mask="999.999.999-99"
            onChange={(e) => setCpf(e.target.value)}
            type="number" label="CPF" value={cpf}>
            {() => <TextField style={styles.TextField} id="cpf" label="CPF" variant="outlined" fullWidth required error={!!cpfError} helperText={cpfError}/>}
          </ReactInputMask>

          <ReactInputMask
            mask="99.999.999-9"
            onChange={(e) => setRg(e.target.value)}
            type="number" label="RG" value={rg}>
            { () => <TextField style={styles.TextField} id="rg" label="RG" variant="outlined"  fullWidth required error={!!rgError} helperText={rgError}/> }
          </ReactInputMask>
          
          <ReactInputMask
            mask="99999-999"
            onChange={(e) => setCep(e.target.value)}
            type="number" value={cep}>
            { () => <TextField style={styles.TextField} id="cep" label="CEP" variant="outlined" fullWidth required error={!!cepError} helperText={cepError}/> }
          </ReactInputMask>

          <TextField type="checkbox"
          id="representante"
          value={representante}
          label="Representante"
          onChange={(e) => setRepresentante(e.target.value)} required
          />


          </Paper>
          </Container>
          </>
          );
}