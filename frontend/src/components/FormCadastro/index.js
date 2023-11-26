import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, FormHelperText, Paper } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import { useSnackbar } from 'notistack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import styles from '../Styles/FormsStyles';
import CustomButton from '../Form/CustomButton';
import MenuItemCondominio from '../Form/MenuItemCondominio';
import MenuItemApartamento from '../Form/MenuItemApartamento';


export default function FormCadastro({linkfetch, tipo}) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cep, setCep] = useState('');
  const [funcao, setFuncao] = useState('');
  const [salario, setSalario] = useState('');
  const [horaEntrada, setHoraEntrada] = useState(null);
  const [horaSaida, setHoraSaida] = useState(null);
  const [tipoMorador, setTipoMorador] = useState(''); // Initialize 'tipo' state
  const [representante, setRepresentante] = useState(false);
  const [exame, setExame] = useState(false);
  const [atribuido, setAtribuido] = useState(false);
  const [visitante, setVisitante] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [condominio, setCondominio] = useState('');
  const [condominioId, setCondominioId] = useState(null);
  const [condominioError, setCondominioError] = useState('');
  const [apartamento, setApartamento] = useState("");
  const [apartamentoId, setApartamentoId] = useState(null);
  const [apartamentoError, setApartamentoError] = useState("");
  

  const [nomeError, setNomeError] = useState('');
  const [idadeError, setIdadeError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [rgError, setRgError] = useState('');
  const [cepError, setCepError] = useState('');
  const [funcaoError, setFuncaoError] = useState('');
  const [salarioError, setSalarioError] = useState('');
  const [horaEntradaError, setHoraEntradaError] = useState(null);
  const [horaSaidaError, setHoraSaidaError] = useState(null);
  const [tipoMoradorError, setTipoMoradorError] = useState('');
  const [email, setEmail] = useState("");
  const [emailErro, setEmailErro] = useState("");

  const [camposExtras, setCamposExtras] = useState('');

  const handleClick = (e) => {
    e.preventDefault()

    let valid = true;

    if (nome.trim() === '') { setNomeError("Nome Obrigatorio")
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

    if (tipo === "funcionario" && valid) {
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
    }

    if (tipo === "morador" && valid) {
      if (!representante && !atribuido && !visitante) {
        setTipoMoradorError('Selecione pelo menos uma opção');
        valid = false;
      } else {
        setTipoMoradorError('');
      }

      if (!apartamento) {
        setApartamentoError('Campo obrigatório');
        valid = false;
      } else {
        setApartamentoError('');
      }
    }

    if (email.trim() === '') { setEmailErro("Nome Obrigatorio")
  } else {
    setEmailErro('');
  }

    if (tipo === "morador" && valid) {
      const data = { nome, idade, cpf, rg, cep, apartamentoId, email, representante, exame, atribuido, visitante };
      enviarDados(data);
      console.log(data)
    }
    if (tipo === "funcionario" && valid) {
      const data = { nome, idade, cpf, rg, cep, funcao, salario, horaEntrada, horaSaida, condominioId };
      enviarDados(data);
      console.log(data)
    }
  };

  const enviarDados = async (data) => {
    try {
      if (tipo === "morador") {
        const response = await fetch(`${linkfetch}/salvar/${apartamentoId}`, {
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
          setTipoMorador('');
          setExame(false);
          setAtribuido(false);
          setRepresentante(false);
          setVisitante(false);
          setApartamento("");
        }
      } else if (tipo === "funcionario") {
        const response = await fetch(`${linkfetch}/salvar/${condominioId}`, {
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
          setCondominio("");
        }
      }
      else {
        if (tipo === "funcionario") {
          console.error('Erro ao adicionar funcionário');
          enqueueSnackbar('Erro ao adicionar funcionário', { variant: 'error' });
        } else if (tipo === "morador") {
          console.error('Erro ao adicionar morador');
          enqueueSnackbar('Erro ao adicionar morador', { variant: 'error' });
        }
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      enqueueSnackbar('Problema ao se conectar com o servidor', { variant: 'error' });
    }
  };

  const handleCamposExtras = (event) => {
    setCamposExtras(event.target.value);
  } 

  const handleRadioChange = (event) => {
    setTipoMorador(event.target.value);
    setRepresentante(event.target.value === 'rep');
    setAtribuido(event.target.value === 'atr');
    setVisitante(event.target.value === 'vis');
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

          {tipo === "funcionario" && (
          <TextField style={styles.TextField} 
            id="funcao" variant="outlined" 
            type="text" label="Função" value={funcao} 
            onChange={(e) => setFuncao(e.target.value)} 
            fullWidth required error={!!funcaoError} helperText={funcaoError} />
            )}

          {tipo === "funcionario" && (
          <TextField style={styles.TextField}
            id="salario" variant="outlined" 
            type="number" label="Salário" value={salario} 
            onChange={(e) => setSalario(e.target.value)} 
            fullWidth required error={!!salarioError} helperText={salarioError} />
          )}

          {tipo === "funcionario" && (    
          <TextField style={styles.TextField}
            type="time"
            id="horaEntrada"
            label="Hora de Entrada"
            value={horaEntrada}
            onChange={(e) => setHoraEntrada(e.target.value)}
            fullWidth required error={!!horaEntradaError} helperText={horaEntradaError} />
            )}
            
          {tipo === "funcionario" && (   
          <TextField style={styles.TextField}
            type="time"
            id="horaSaide"
            label="Hora de Saida"
            value={horaSaida}
            onChange={(e) => setHoraSaida(e.target.value)}
            fullWidth required error={!!horaSaidaError} helperText={horaSaidaError} />
            )}

          {tipo === "funcionario" && (   
          <MenuItemCondominio
            onCondominioChange={(selectedCondominio, selectedCondominioId) => {
              setCondominio(selectedCondominio);
              setCondominioId(selectedCondominioId);
            }}
            onError={(error) => setCondominioError(error)}
          />
          )} 
          {tipo === "morador" && (
            <TextField style={styles.TextField} 
            id="email" variant="outlined" 
            type="email" label="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} 
            fullWidth required error={!!emailErro} helperText={emailErro} />
          )}

          {tipo === "morador" && (
            <FormLabel id="demo-radio-buttons-group-label">Tipo</FormLabel>
          )}
          {tipo === "morador" && (
          <RadioGroup
            style={{
              ...styles.RadioGroup,
              border: tipoMoradorError ? '1px solid red' : styles.RadioGroup.border,
            }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={tipoMorador}
            onChange={handleRadioChange}
          > 
            <FormControlLabel
              value="rep"
              control={<Radio />}
              label="Representante"
              name="representante"
            />
            <FormControlLabel
              value="atr"
              control={<Radio />}
              label="Atribuido"
              name="atributo"
            />
            <FormControlLabel
              value="vis"
              control={<Radio />}
              label="Visitante"
              name="visitante"
            />
          </RadioGroup>
            )}
          {tipo === "morador" && (
          <FormHelperText style={{ margin:'3 14 16px ' }} error={!!tipoMoradorError}>{tipoMoradorError}</FormHelperText>
          )}

          {tipo === "morador" && (   
          <MenuItemApartamento
            onApartamentoChange={(selectedApartamento, selectedApartamentoId) => {
              setApartamento(selectedApartamento);
              setApartamentoId(selectedApartamentoId);
            }}
            onError={(error) => setApartamentoError(error)}
          />
          )} 

          <CustomButton onClick={handleClick} />
        </Paper>
      </Container>
    
    </>
   )

};
