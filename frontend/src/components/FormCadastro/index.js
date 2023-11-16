import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import CustomButton from '../../../components/Form/CustomButton';
import styles from '../../../components/Styles/FormsStyles';
import { useSnackbar } from 'notistack';
import MenuItemCondominio from '../../../components/Form/MenuItemCondominio';


export default function FormCadastro(linkfetch, morador, funcionario) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [cep, setCep] = useState('');
    const [funcao, setFuncao] = useState('');
    const [salario, setSalario] = useState('');
    const [horaEntrada, setHoraEntrada] = useState(null);
    const [horaSaida, setHoraSaida] = useState(null);
    const [tipo, setTipo] = useState(''); // Initialize 'tipo' state
    const [representante, setRepresentante] = useState(false);
    const [exame, setExame] = useState(false);
    const [atribuido, setAtribuido] = useState(false);
    const [visitante, setVisitante] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [condominio, setCondominio] = useState('');
    const [condominioId, setCondominioId] = useState(null);
    const [setCondominioError] = useState('');
  
    const [nomeError, setNomeError] = useState('');
    const [idadeError, setIdadeError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [rgError, setRgError] = useState('');
    const [cepError, setCepError] = useState('');
    const [funcaoError, setFuncaoError] = useState('');
    const [salarioError, setSalarioError] = useState('');
    const [horaEntradaError, setHoraEntradaError] = useState(null);
    const [horaSaidaError, setHoraSaidaError] = useState(null);
    const [tipoError, setTipoError] = useState('');

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
    
        if (funcao.trim() === '') {
          setFuncaoError('Campo obrigatório');
          valid = false;
          } else {
          setFuncaoError('');
        }
    
        if (!salario || isNaN(salario) || Number(salario) <= 0) {
          setSalarioError('Salário inválido!');
          valid = false;
        } else {
          setSalarioError('');
        }
  
        if (condominio.trim() === '') {
          setCondominioError('Campo obrigatório');
          valid = false;
          } else {
          setCondominioError('');
        }
  
        if (horaEntrada.trim() === "") {
          setHoraEntradaError('Campo obrigatório');
          valid = false;
        } else {
          setHoraEntradaError("");
        }
  
        if (horaSaida.trim() === "") {
          setHoraSaidaError('Campo obrigatório');
          valid = false;
        } else {
          setHoraSaidaError("");
        }

        if (!representante && !atribuido && !visitante) {
            setTipoError('Selecione pelo menos uma opção');
            valid = false;
          } else {
            setTipoError('');
          }

        if (funcionario === true && valid) {
          const data = { nome, idade, cpf, rg, cep, funcao, salario, horaEntrada, horaSaida, condominioId };
          enviarDados(data);
          console.log(data)
        } else if (morador === true && valid){
          const data = { nome, idade, cpf, rg, cep, funcao, salario, condominioId, representante, exame, atribuido, visitante };
          enviarDados(data);
          console.log(data)
        }
      };

      const enviarDados = async (data) => {
        try {
          const response = await fetch(`${linkfetch}/salvar?id=${condominioid}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
      
          if (response.ok) {
            console.log("Novo dado adicionado");
            setNome('');
            setIdade('');
            setCpf('');
            setRg('');
            setCep('');
            setFuncao('');
            setSalario('');
          } else {
            if (funcionario === true) {
              console.error('Erro ao adicionar funcionário');
              enqueueSnackbar('Erro ao adicionar funcionário', { variant: 'error' });
            } else if (morador === true) {
              console.error('Erro ao adicionar morador');
              enqueueSnackbar('Erro ao adicionar morador', { variant: 'error' });
            }
          }
        } catch (error) {
          console.error('Erro ao fazer a solicitação:', error);
          enqueueSnackbar('Problema ao se conectar com o servidor', { variant: 'error' });
        }
      };
       
      };
