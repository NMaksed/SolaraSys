import React, { useState } from 'react';
import { Container, Paper, FormControl } from '@mui/material';
import InputField from '../../../components/Form/InputField';
import MaskedInput from '../../../components/Form/MaskedInput';
import CustomSnackbar from '../../../components/Form/CustomSnackbar';
import SaveButton from '../../../components/Form/SaveButton';

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
  const [mensagem, setMensagem] = useState('');
  const [errors, setErrors] = useState({ ...initialErrors });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const enviarDadosEmpresa = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/empresa/salvar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        showSnackbar('success', 'Empresa adicionada com sucesso');
        resetForm();
      } else {
        showSnackbar('error', 'Erro ao adicionar empresa');
      }
    } catch (error) {
      showSnackbar('error', 'Erro ao adicionar empresa');
    }
  };

  const showSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  const resetForm = () => {
    setFormData({ ...initialFormData });
    setErrors({ ...initialErrors });
  };

  const validateField = (fieldName) => {
    const value = formData[fieldName];
    let error = '';

    switch (fieldName) {
      case 'nome':
      case 'numero':
      case 'cidade':
      case 'rua':
      case 'uf':
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
    <Container>
      <Paper>
        <FormControl onSubmit={handleClick}>
          <InputField
            label="Nome"
            value={formData.nome}
            type="text"
            fieldName="nome"
            onChange={handleChange}
            error={errors.nome}
          />
          <InputField
            label="Número"
            value={formData.numero}
            type="number"
            fieldName="numero"
            onChange={handleChange}
            error={errors.numero}
          />
          <InputField
            label="Cidade"
            value={formData.cidade}
            type="text"
            fieldName="cidade"
            onChange={handleChange}
            error={errors.cidade}
          />
          <InputField
            label="Rua"
            value={formData.rua}
            type="text"
            fieldName="rua"
            onChange={handleChange}
            error={errors.rua}
          />
          <MaskedInput
            mask="99.999.999/9999-99"
            label="CNPJ"
            value={formData.cnpj}
            fieldName="cnpj"
            onChange={handleChange}
            error={errors.cnpj}
          />
          <InputField
            label="UF"
            value={formData.uf}
            type="text"
            fieldName="uf"
            onChange={handleChange}
            error={errors.uf}
          />
          <MaskedInput
            mask="99999-999"
            label="CEP"
            value={formData.cep}
            fieldName="cep"
            onChange={handleCepChange}
            error={errors.cep}
          />
          <SaveButton onClick={handleClick} />

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
