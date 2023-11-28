import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Button, FormControl, TextField } from '@mui/material';
import styles from './styles';
import { useHistory } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack';
import logo1 from '../../../components/Styles/logo1.svg';
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css";


const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();


  //Verificacao de campo
  const handleLogin = (e) => {
    e.preventDefault()
    let valid = true;
    if (email.trim() === '' || senha.trim() === '') {
      enqueueSnackbar('Credenciais inválidas', { variant: 'warning' });
      valid = false;
    }

    if (valid) {
      if (email === 'admin' && senha === 'admin') { console.log('Login automático para Ambiente de Teste'); history.push('/dashboard'); } else {
        const data = { email, senha };
        console.log(data)
        consultarLogin(data);
      }
    }
  };

  const consultarLogin = async (data) => {
    console.log(data)
    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const token = await response.text();
        localStorage.setItem("jwtToken", token);
        history.push("/dashboard")
      } else {
        enqueueSnackbar('Email de usuário ou senha incorreta', { variant: 'error' });
      }

    } catch (error) {
      console.error('Erro ao fazer login:', error);
      enqueueSnackbar('Problema ao se conectar com o servidor', { variant: 'error' });
    }
  };


  const isMobile = Dimensions.get('window').width < 600;
  return (
    <View style={{
      
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(140deg, rgb(255,187,107) 12%, rgb(122,119,255) 68%)',
      height: '100vh',
    }}>
            <SnackbarProvider/>
      <View style={isMobile ? styles.mobileContainer : styles.container}>

      <View style={isMobile ? styles.containerFormMobile : styles.containerForm}>
          <FormControl>
            <Text style={styles.loginText}>Login</Text>
            <TextField style={styles.TextField}
              label="Email" value={email} type="email" variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth required autoFocus
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  // Mova o foco para o campo de senha ao pressionar Enter
                  document.getElementById('senha').focus();
                }
              }}
            />

            <TextField style={styles.TextField}
              label="Senha" value={senha} type="password" variant="standard"
              onChange={(e) => setSenha(e.target.value)}
              fullWidth required id="senha"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  // Execute a função de login ao pressionar Enter no campo de senha
                  handleLogin(e);
                }
              }}
            />
            <Button style={styles.button} variant="contained" onClick={handleLogin}>
              Entrar
            </Button>
          </FormControl>
        </View>
        {!isMobile && (
          <>
            <View style={styles.separator} />
            <View style={styles.containerLogo}>

              <Image style={styles.logo} alt="Solara" source={logo1} />

              <Text style={styles.textoBonitinho}>
              <h5>Transformando condomínios, unindo eficiência e comodidade para o seu bem-estar!</h5> 
              </Text>

              <View style={styles.buttonContainer}>
                <a style={styles.textCase}
                  href='https://www.youtube.com/@letrajota'
                >Precisa de ajuda?</a>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Login;