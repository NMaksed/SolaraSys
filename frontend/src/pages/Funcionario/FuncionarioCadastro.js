import React, { useState } from 'react';
import { Container, Paper, FormControl } from '@mui/material';
import MenuItemCondominio from '../../components/Form/MenuItemCondominio';
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
  funcao: '',
  salario: '',
  condominio: '',
};

const initialErrors = {
  nome: '',
  idade: '',
  cpf: '',
  rg: '',
  cep: '',
  funcao: '',
  salario: '',
  condominio: '',
};

export default function FuncionarioCadastro() {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState({ ...initialErrors });

  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const enviarDadosFuncionario = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/funcionario/salvar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Novo Funcionário Adicionado');
        setSnackbarSeverity('success');
        setSnackbarMessage(`Funcionário ${data.nome} adicionado(a) com sucesso`);
        setFormData({ ...initialFormData });
        setErrors({ ...initialErrors });
      } else {
        console.error('Erro ao adicionar funcionário');
        setSnackbarSeverity('error');
        setSnackbarMessage('Erro ao adicionar funcionário');
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Erro ao adicionar funcionário');
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
      case 'funcao':
        if (value.trim() === '') {
          error = 'Campo obrigatório';
        }
        break;
      case 'salario':
        if (!value || isNaN(value) || Number(value) <= 0) {
          error = 'Salário inválido';
        }
        break;
      case 'condominio':
        if (!value) {
          error = 'Campo obrigatório';
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

    // Validar cada campo
    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName);
    });

    // Verificar se há algum erro
    const hasErrors = Object.values(errors).some((error) => error !== '');

    if (!hasErrors) {
      enviarDadosFuncionario(formData);
    }
  };

  return (
    <Container style={styles.container}>
      <Paper style={styles.paper}>
        <FormControl onSubmit={handleClick}>
          <InputField
            id="nome"
            label="Nome"
            value={formData.nome}
            onChange={(e) => handleChange(e, 'nome')}
            error={!!errors.nome}
            helperText={errors.nome}
          />
          <InputField
            id="idade"
            label="Idade"
            value={formData.idade}
            onChange={(e) => handleChange(e, 'idade')}
            type="number"
            error={!!errors.idade}
            helperText={errors.idade}
          /> 
          <MaskedInput
            id="cpf"
            label="CPF"
            value={formData.cpf}
            onChange={(e) => handleChange(e, 'cpf')}
            mask="999.999.999-99"
            error={!!errors.cpf}
            helperText={errors.cpf}
          />
          <MaskedInput
            id="rg"
            label="RG"
            value={formData.rg}
            onChange={(e) => handleChange(e, 'rg')}
            mask="99.999.999-99"
            error={!!errors.rg}
            helperText={errors.rg}
          />
          <MaskedInput
            id="cep"
            label="CEP"
            value={formData.cep}
            onChange={(e) => handleCepChange(e)}
            mask="99999-999"
            error={!!errors.cep}
            helperText={errors.cep}
          />
          <InputField
            id="funcao"
            label="Função"
            value={formData.funcao}
            onChange={(e) => handleChange(e, 'funcao')}
            error={!!errors.funcao}
            helperText={errors.funcao}
          />
          <InputField
            id="salario"
            label="Salário"
            value={formData.salario}
            onChange={(e) => handleChange(e, 'salario')}
            type="number"
            error={!!errors.salario}
            helperText={errors.salario}
          />
          <MenuItemCondominio
            onCondominioChange={(condominio) => handleChange({ target: { value: condominio } }, 'condominio')}
            onError={(error) => {
              validateField('condominio');
              setIsSaveButtonDisabled(true); // Desabilitar o botão de salvamento
            }}
          />
          <SaveButton type="submit" disabled={isSaveButtonDisabled}/>
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