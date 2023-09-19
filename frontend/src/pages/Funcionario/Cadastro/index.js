import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import Button from '@mui/material/Button';
import styles from './styles';
import MenuItemCondominio from '../../../components/MenuItem/MenuItemCondominio';


export default function FuncionarioCadastro() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cep, setCep] = useState('');
  const [funcao, setFuncao] = useState('');
  const [salario, setSalario] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [condominio, setCondominio] = useState('');
  const [id, setId] = useState(null);

  const [nomeError, setNomeError] = useState('');
  const [idadeError, setIdadeError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [rgError, setRgError] = useState('');
  const [cepError, setCepError] = useState('');
  const [funcaoError, setFuncaoError] = useState('');
  const [salarioError, setSalarioError] = useState('');
  const [condominioError, setCondominioError] = useState('');

  const enviarDadosFuncionario = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/funcionario/salvar{1}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Novo Funcionário Adicionado');
        exibirMensagemTemporaria('Funcionário $nome adicionado(a) com sucesso', 5000);
        // Limpar os campos após o envio bem-sucedido, se necessário
        setNome('');
        setIdade('');
        setCpf('');
        setRg('');
        setCep('');
        setFuncao('');
        setSalario('');
        setCondominio('')
      } else {
        console.error('Erro ao adicionar funcionário');
        exibirMensagemTemporaria('96#Erro ao adicionar funcionário', 5000);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      exibirMensagemTemporaria('69#Erro ao adicionar funcionário', 5000);
    }
  };

  function exibirMensagemTemporaria(mensagem, tempo) {
    setMensagem(mensagem);
    setTimeout(() => {
      setMensagem('');
    }, tempo);
  }

  const handleClickCondominio = (e) => {
    e.preventDefault()

    let valid = true;

    if (condominio) {
      setCondominioError('Campo Obrigatório!');
      valid = false
    } else {
      setCondominioError('');
    }

    if (valid) {
      const data = { condominio };
      enviarDadosFuncionario(data);
    }

  }

  const handleClick = (e) => {
    e.preventDefault()

    let valid = true;

    // Validar nome
    if (nome.trim() === '') {
      setNomeError('Campo obrigatório');
      valid = false;
    } else {
      setNomeError('');
    }

    // Validar idade
    if (idade.trim() === '') {
      setIdadeError('Campo obrigatório');
      valid = false;
    } else {
      setIdadeError('');
    }

    // Validar CPF
    if (cpf.trim() === '' || cpf.replace(/[^\d]/g, '').length !== 11) {
      setCpfError('CPF inválido');
      valid = false;
    } else {
      setCpfError('');
    }

    // Validar RG
    if (rg.trim() === '' || rg.replace(/[^\d]/g, '').length < 9) {
      setRgError('RG inválido');
      valid = false;
    } else {
      setRgError('');
    }

    //Validar CEP
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

    if (valid) {
      const data = { nome, idade, cpf, rg, cep, funcao, salario, condominio };
      console.log(data)
      enviarDadosFuncionario(data);
    }
    };



  return (
    <>
      <Container style={styles.container}>
        <Paper elevation={3} style={styles.paper} >
          <TextField style={styles.text} 
            id="nome" variant="outlined" 
            type="text" label="Nome" value={nome}
            onChange={(e) => setNome(e.target.value)} 
            fullWidth required error={!!nomeError} helperText={nomeError} 
            />

          <TextField style={styles.text}
            id="idade" variant="outlined" 
            type="number" label="Idade" value={idade}
            onChange={(e) => setIdade(e.target.value)}
            fullWidth required error={!!idadeError} helperText={idadeError} 
          />
            
          <ReactInputMask 
            mask="999.999.999-99"
            onChange={(e) => setCpf(e.target.value)}
            type="number" label="CPF" value={cpf}>
            {() => <TextField style={styles.text} id="cpf" label="CPF" variant="outlined" fullWidth required error={!!cpfError} helperText={cpfError}/>}
          </ReactInputMask>

          <ReactInputMask
            mask="99.999.999-9"
            onChange={(e) => setRg(e.target.value)}
            type="number" label="RG" value={rg}>
            { () => <TextField style={styles.text} id="rg" label="RG" variant="outlined"  fullWidth required error={!!rgError} helperText={rgError}/> }
          </ReactInputMask>
          
          <ReactInputMask
            mask="99999-999"
            onChange={(e) => setCep(e.target.value)}
            type="number" value={cep}>
            { () => <TextField style={styles.text} id="cep" label="CEP" variant="outlined" fullWidth required error={!!cepError} helperText={cepError}/> }
          </ReactInputMask>

          <TextField style={styles.text} 
            id="funcao" variant="outlined" 
            type="text" label="Função" value={funcao} 
            onChange={(e) => setFuncao(e.target.value)} 
            fullWidth required error={!!funcaoError} helperText={funcaoError} 
          />

          <TextField style={styles.text}
            id="salario" variant="outlined" 
            type="number" label="Salário" value={salario} 
            onChange={(e) => setSalario(e.target.value)} 
            fullWidth required error={!!salarioError} helperText={salarioError} 
          />

          <MenuItemCondominio
          id="Condominio"
          label="Condominio"
          value={condominio.id}
          onChange={handleClickCondominio}
           style={styles.text} />

          <Button variant="contained" onClick={handleClick} style={styles.botao}>
              Salvar
          </Button> {mensagem && <div>{mensagem}</div>}
        </Paper>
      </Container>
    </>
  );
}
