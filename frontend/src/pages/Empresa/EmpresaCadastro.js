import React, { useState } from 'react';
import { Container, Paper, FormControl } from '@mui/material';
// import {InputField, MaskedInput, SaveButton, CustomSnackbar, FormValidation }from '../../components/Form';
import InputField from '../../components/Form/InputField';
import MaskedInput from '../../components/Form/MaskedInput';
import CustomSnackbar from '../../components/Form/CustomSnackbar';
import SaveButton from '../../components/Form/SaveButton';
import styles from '../../components/Form/styles';

const initialFormData = {
  nome: '',
  numero: '',
  cidade: '',
  rua: '',
  cnpj: '',
  uf: '',
  cep: '',
};

const initialErrors = {
  nome: '',
  numero: '',
  cidade: '',
  rua: '',
  cnpj: '',
  uf: '',
  cep: '',
};

export default function EmpresaCadastro() {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState({ ...initialErrors });

  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const enviarDadosEmpresa = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/empresa/salvar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSnackbarSeverity('success');
        setSnackbarMessage('Empresa adicionado(a) com sucesso');
        setOpenSnackbar(true);
        setFormData({ ...initialFormData });
        setErrors({ ...initialErrors });
      } else {
        setSnackbarSeverity('error');
        setSnackbarMessage('Erro ao adicionar empresa');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Erro ao adicionar empresa');
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
      case 'numero':
        if (value.trim() === '') {
          error = 'Campo obrigatório';
        }
        break;
      case 'cidade':
        if (value.trim() === '') {
          error = 'Campo obrigatório';
        }
        break;
      case 'rua':
        if (value.trim() === '') {
          error = 'Campo obrigatório';
        }
        break;
      case 'cnpj':
        const strippedCnpj = value.replace(/[^\d]/g, '');
        if (strippedCnpj.length !== 14) {
          error = 'CNPJ inválido';
        }
        break;
      case 'uf':
        if (value.trim() === '') {
          error = 'Campo obrigatório';
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
      enviarDadosEmpresa(formData);
    }
  };

  return (
    <Container style={styles.container}>
      <Paper style={styles.paper}>
        <FormControl onSubmit={handleClick}>
          <InputField
            label="Nome"
            value={formData.nome}
            type="text"
            onChange={(e) => handleChange(e, 'nome')}
            error={!!errors.nome}
            helperText={errors.nome}
          />
          <InputField
            label="Número"
            value={formData.numero}
            type="number"
            onChange={(e) => handleChange(e, 'numero')}
            error={!!errors.numero}
            helperText={errors.numero}
          />
          <InputField
            label="Cidade"
            value={formData.cidade}
            type="text"
            onChange={(e) => handleChange(e, 'cidade')}
            error={!!errors.cidade}
            helperText={errors.cidade}
          />
          <InputField
            label="Rua"
            value={formData.rua}
            type="text"
            onChange={(e) => handleChange(e, 'rua')}
            error={!!errors.rua}
            helperText={errors.rua}
          />
          <MaskedInput
            mask="99.999.999/9999-99"
            label="CNPJ"
            value={formData.cnpj}
            onChange={(e) => handleChange(e, 'cnpj')}
            error={!!errors.cnpj}
            helperText={errors.cnpj}
          />
          <InputField
            label="UF"
            value={formData.uf}
            type="text"
            onChange={(e) => handleChange(e, 'uf')}
            error={!!errors.uf}
            helperText={errors.uf}
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
