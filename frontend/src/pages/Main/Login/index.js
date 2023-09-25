import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { Button, FormControl, TextField } from '@mui/material';
import backgroundImage from '../../../components/Styles/or-21s84129.png';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import { useSnackbar } from 'notistack';
import CustomButton from '../../../components/Form/CustomButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState(styles.backgroundImage);
  const [contentStyle, setContentStyle] = useState(styles.content);
  const [scaleValue] = useState(new Animated.Value(0));
  const navigation = useNavigation(0);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (showLoginForm) {
      // Aplicar a animação de zoom quando o formulário é exibido
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(scaleValue, {
        // Aplicar a animação inversa formulário é escondido
        toValue: 0, 
        friction: 7,
        useNativeDriver: true,
      }).start();
    }
  }, [showLoginForm, scaleValue]);

  //FECHA o Login e muda o background para SEM Blur
  const handleBackgroundClick = () => {
    setShowLoginForm(false);
    setBackgroundStyle(styles.backgroundImage);
    setContentStyle(styles.content);
  };

 //ABRE o Login e muda o background para COM Blur
  const handleButtonClick = () => {
    setShowLoginForm(true);
    setBackgroundStyle(styles.backgroundBlur);
    setContentStyle(styles.contentBlur);
  };

  //Verificacao de campo
  const handleLogin = (e) => {
    e.preventDefault()
    let valid = true;
    if (email.trim() === '' || senha.trim() === '') {
      enqueueSnackbar('Credenciais inválidas', { variant: 'warning' });
      valid = false;
    } 
    
    if (valid) { 
      if (email === 'admin' && senha === 'admin') {console.log('Login automático para Ambiente de Teste');navigation.navigate('Dashboard');} else {
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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigation.navigate('Dashboard');
      } else {
        enqueueSnackbar('Email de usuário ou senha incorreta', { variant: 'error' });
      }

    } catch (error) {
      console.error('Erro ao fazer login:', error);
      enqueueSnackbar('Problema ao se conectar com o servidor', { variant: 'error' });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackgroundClick} style={backgroundStyle}>
        <Image source={backgroundImage} style={backgroundStyle} />
      </TouchableOpacity>
      <View style={contentStyle}>
        <Text style={styles.title}>🌞 Solara 😎</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>Solara é um inovador programa de gerenciamento condominial que leva a administração de condomínios para o futuro. Com uma interface intuitiva e recursos de ponta, Solara foi projetado para simplificar a vida dos síndicos, condôminos e administradores, tornando a gestão condominial mais eficiente, transparente e agradável.</Text>
        <Button onClick={handleButtonClick} color="warning" variant="outlined" >
          Entrar
        </Button>
      </View>

      {showLoginForm && (
        <Animated.View
          style={[
            styles.loginForm,
            {
              transform: [{ scale: scaleValue }],
            },
          ]}
        >
          <FormControl>
            <Text style={styles.loginText}>Login</Text>
            <TextField
              style={styles.TextField}
              label="Email"
              value={email}
              type="email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              autoFocus
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  document.getElementById('senha').focus();
                  }
                }}
              />

            <TextField
              style={styles.TextField}
              label="Senha"
              value={senha}
              type="password"
              variant="standard"
              onChange={(e) => setSenha(e.target.value)}
              fullWidth
              required
              id="senha"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleLogin(e);
                }
              }}
            />

            <CustomButton onClick={handleLogin} text="Login" variant="contained" />
          </FormControl>
        </Animated.View>
      )}
    </View>
  );
};

export default Login;
