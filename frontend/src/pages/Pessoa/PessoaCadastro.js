import React, { useState } from 'react';
import { Container, Paper, FormControl } from '@mui/material';
// import {InputField, MaskedInput, SaveButton, CustomSnackbar, styles }from '../../components/Form';
import InputField from '../../components/Form/InputField';
import MaskedInput from '../../components/Form/MaskedInput';
import CustomSnackbar from '../../components/Form/CustomSnackbar';
import SaveButton from '../../components/Form/SaveButton';
import styles from '../../components/Form/styles';

const initialFormData = {
  nome: '',
  idade: '',
  cpf: '',
  rg: '',
  cep: '',
};

const initialErrors = {
  nome: '',
  idade: '',
  cpf: '',
  rg: '',
  cep: '',
};

export default function PessoaCadastro() {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState({ ...initialErrors });

  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const enviarDadosPessoa = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/pessoa/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSnackbarSeverity('success');
        setSnackbarMessage('Pessoa adicionada com sucesso');
        setOpenSnackbar(true);
        setFormData({ ...initialFormData });
        setErrors({ ...initialErrors });
      } else {
        setSnackbarSeverity('error');
        setSnackbarMessage('Erro ao adicionar pessoa');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Erro ao adicionar pessoa');
      setOpenSnackbar(true);
    }
  };

  const validateField = (fieldName) => {
    const value = formData[fieldName];
    let error = '';

    switch (fieldName) {
      case 'nome':
        if (value.trim() === '') {
          error = 'Campo obrigatório';
        }
        break;
      case 'idade':
        if (value.trim() === '') {
          error = 'Campo obrigatório';
        }
        break;
      case 'cpf':
        const strippedCpf = value.replace(/[^\d]/g, '');
        if (strippedCpf.length !== 11) {
          error = 'CPF inválido';
        }
        break;
      case 'rg':
        const strippedRg = value.replace(/[^\d]/g, '');
        if (strippedRg.length < 9) {
          error = 'RG inválido';
        }
        break;
      case 'cep':
        const strippedCep = value.replace(/[^\d]/g, '');
        if (strippedCep.length !== 8) {
          error = 'CEP inválido';
        }
        break;
      default:
        break;
    }

    setErrors({ ...errors, [fieldName]: error });
  };

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleCepChange = (e) => {
    const { value } = e.target;
    const strippedCep = value.replace(/[^\d]/g, '');
    setFormData({ ...formData, cep: strippedCep });
  };

  const handleClick = (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName);
    });

    const hasErrors = Object.values(errors).some((error) => error !== '');
    
    if (!hasErrors) {
      enviarDadosPessoa(formData);
    }
  };

  return (
    <Container style={styles.container}>
      <Paper style={styles.paper}>
        <FormControl onSubmit={handleClick} style={styles.form}>
          <InputField
            label="Nome"
            value={formData.nome}
            type="text"
            onChange={(e) => handleChange(e, 'nome')}
            error={!!errors.nome}
            helperText={errors.nome}
          />
          <InputField
            label="Idade"
            value={formData.idade}
            type="number"
            onChange={(e) => handleChange(e, 'idade')}
            error={!!errors.idade}
            helperText={errors.idade}
          />
          <MaskedInput
            mask="999.999.999-99"
            label="CPF"
            value={formData.cpf}
            onChange={(e) => handleChange(e, 'cpf')}
            error={!!errors.cpf}
            helperText={errors.cpf}
          />
          <MaskedInput
            mask="99.999.999-99"
            label="RG"
            value={formData.rg}
            onChange={(e) => handleChange(e, 'rg')}
            error={!!errors.rg}
            helperText={errors.rg}
          />
          <MaskedInput
            mask="99999-999"
            label="CEP"
            value={formData.cep}
            onChange={(e) => handleCepChange(e)}
            error={!!errors.cep}
            helperText={errors.cep}
          />
          <SaveButton type="submit"/>
        </FormControl>
        <CustomSnackbar
          message={snackbarMessage}
          severity={snackbarSeverity}
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        />
      </Paper>
    </Container>
  );
}
