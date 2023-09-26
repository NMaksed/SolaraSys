import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import Button from '@mui/material/Button';
import styles from './styles';
import MenuItemCondominio from '../../../components/MenuItem/MenuItemCondominio';


export default function PredioCadastro() {

  const [numero, setNumero] = useState(0);
  const [andar, setAndar] = useState(0);
  const [referencia, setReferencia] = useState('');

  const [mensagem, setMensagem] = useState('');
  const [condominio, setCondominio] = useState('');
  const [id, setId] = useState(null);

  const [numeroError, setNumeroError] = useState('');
  const [andarError, setAndarError] = useState('');
  const [referenciaError, setReferenciaError] = useState('');

  const [condominioError, setCondominioError] = useState('');

  const enviarDadosPredio = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/predio/salvar{1}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Novo Predio Adicionado');
        exibirMensagemTemporaria('Predio $nome adicionado(a) com sucesso', 5000);
        // Limpar os campos após o envio bem-sucedido, se necessário
        setNumero('');
        setAndar('');
        setReferencia('');

        setCondominio('')
      } else {
        console.error('Erro ao adicionar predio');
        exibirMensagemTemporaria('96#Erro ao adicionar predio', 5000);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      exibirMensagemTemporaria('69#Erro ao adicionar predio', 5000);
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
      enviarDadosPredio(data);
    }

  }

  const handleClick = (e) => {
    e.preventDefault()

    let valid = true;

        // Validar numero
        if (numero.trim() == 0) {
          setNumeroError('Campo obrigatório');
          valid = false;
        } else {
          setNumeroError('');
        }

                // Validar andar
                if (andar.trim() == 0) {
                  setAndarError('Campo obrigatório');
                  valid = false;
                } else {
                  setAndarError('');
                }
                // Validar referencia
                if (referencia.trim() == '') {
                  setReferenciaError('Campo obrigatório');
                  valid = false;
                } else {
                  setReferenciaError('');
                }

    
    if (valid) {
      const data = { numero, andar, condominio };
      console.log(data)
      enviarDadosPredio(data);
    }
    };



  return (
    <>
      <Container style={styles.container}>
        <Paper elevation={3} style={styles.paper} >

        <TextField style={styles.text} 
            id="numero" variant="outlined" 
            type="number" label="Numero" value={numero}
            onChange={(e) => setNumero(e.target.value)} 
            fullWidth required error={!!numeroError} helperText={numeroError} 
            />
        <TextField style={styles.text} 
            id="andar" variant="outlined" 
            type="number" label="Andar" value={andar}
            onChange={(e) => setAndar(e.target.value)} 
            fullWidth required error={!!andarError} helperText={andarError} 
            />
        <TextField style={styles.text} 
            id="referencia" variant="outlined" 
            type="text" label="Referencia" value={referencia}
            onChange={(e) => setReferencia(e.target.value)} 
            fullWidth required error={!!referenciaError} helperText={referenciaError} 
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
