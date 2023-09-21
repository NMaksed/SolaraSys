import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, FormControl } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import styles from '../../../components/Styles/FormsStyles';
import MenuItemCondominio from '../../../components/MenuItem/MenuItemCondominio';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


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
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState({ ...initialErrors });
  const [condominioError, setCondominioError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
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
        openSnackbarWithMessage(`Funcionário ${data.nome} adicionado(a) com sucesso`, 'success');
        setFormData({ ...initialFormData });
        setErrors({ ...initialErrors });
      } else {
        console.error('Erro ao adicionar funcionário');
        openSnackbarWithMessage('Erro ao adicionar funcionário', 'error');
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      openSnackbarWithMessage('Erro ao adicionar funcionário', 'error');
    }
  };

  const openSnackbarWithMessage = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
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
          <TextField style={styles.textInput}
            id="nome"
            variant="outlined"
            type="text"
            label="Nome"
            value={formData.nome}
            onChange={(e) => handleChange(e, 'nome')}
            fullWidth
            required
            error={!!errors.nome}
            helperText={errors.nome}
          />
          <TextField
            style={styles.textInput}
            id="idade" variant="outlined"
            type="number"
            label="Idade"
            value={formData.idade}
            onChange={(e) => handleChange(e, 'idade')}
            fullWidth
            required
            error={!!errors.idade}
            helperText={errors.idade}
          />
          <ReactInputMask
            mask="999.999.999-99"
            onChange={(e) => handleChange(e, 'cpf')}
          >
            {() => (
              <TextField
                style={styles.textInput}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                required
                error={!!errors.cpf}
                helperText={errors.cpf}
              />
            )}
          </ReactInputMask>
          <ReactInputMask
            mask="99.999.999-99"
            onChange={(e) => handleChange(e, 'rg')}
          >
            {() => (
              <TextField
                style={styles.textInput}
                id="rg"
                label="RG"
                variant="outlined"
                fullWidth
                required
                error={!!errors.rg}
                helperText={errors.rg}
              />
            )}
          </ReactInputMask>
          <ReactInputMask
            mask="99999-999"
            onChange={(e) => handleCepChange(e)}
          >
            {() => (
              <TextField
                style={styles.textInput}
                id="cep"
                label="CEP"
                variant="outlined"
                fullWidth
                required
                error={!!errors.cep}
                helperText={errors.cep}
              />
            )}
          </ReactInputMask>
          <TextField
            style={styles.textInput}
            id="funcao"
            variant="outlined"
            type="text"
            label="Função"
            value={formData.funcao}
            onChange={(e) => handleChange(e, 'funcao')}
            fullWidth
            required
            error={!!errors.funcao}
            helperText={errors.funcao}
          />
          <TextField
            style={styles.textInput}
            id="salario"
            variant="outlined"
            type="number"
            label="Salário"
            value={formData.salario}
            onChange={(e) => handleChange(e, 'salario')}
            fullWidth
            required
            error={!!errors.salario}
            helperText={errors.salario}
          />
          <MenuItemCondominio
            label="Condomínio"
            value={formData.condominio}
            onChange={(value) => handleChange({ target: { value } }, 'condominio')}
            onError={(error) => setCondominioError(error)} // Passa uma função para receber o erro
          />
          <Button variant="contained" style={styles.botao} 
          disabled={!!condominioError}>
            Salvar
          </Button>
        </FormControl>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={snackbarSeverity}
          onClose={() => setOpenSnackbar(false)}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}
