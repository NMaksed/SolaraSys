import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import CustomSnackbar from '../../../components/Form/CustomSnackbar';
import InputField from '../../../components/Form/InputField';
import SaveButton from '../../../components/Form/SaveButton';
import backgroundImage from '../../../components/Styles/or-21s84129.png';
import styles from '../../../components/Styles/HomeScreenStyles';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [backgroundStyle, setBackgroundStyle] = useState(styles.backgroundImage);
  const [contentStyle, setContentStyle] = useState(styles.content);
  const [scaleValue] = useState(new Animated.Value(0));
  const navigation = useNavigation(0);

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
        toValue: 0, // Defina o valor inicial como 0
        friction: 7,
        useNativeDriver: true,
      }).start();
    }
  }, [showLoginForm, scaleValue]);

  const handleBackgroundClick = () => {
    setShowLoginForm(false);
    setBackgroundStyle(styles.backgroundImage);
    setContentStyle(styles.content);
  };

  const handleButtonClick = () => {
    setShowLoginForm(true);
    setBackgroundStyle(styles.backgroundBlur);
    setContentStyle(styles.contentBlur);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ open: false, message: '' });
  };

  const handleLoginSubmit = async () => {
    if (formData.username === '') {
      setSnackbar({ open: true, message: 'Nome de usuário é obrigatório.' });
    } else if (formData.password === '') {
      setSnackbar({ open: true, message: 'Senha é obrigatória.' });
    } else {
      try {
        const response = await fetch('https://localhost:8080/login', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          navigation.navigate('Dashboard');
        } else {
          setSnackbar({ open: true, message: 'Erro ao fazer login.' });
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    }
  };

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackgroundClick} style={backgroundStyle}>
        <Image source={backgroundImage} style={backgroundStyle} />
      </TouchableOpacity>
      <View style={contentStyle}>
        <Text style={styles.title}>Solara</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>Solara é um inovador programa de gerenciamento condominial que leva a administração de condomínios para o futuro. Com uma interface intuitiva e recursos de ponta, Solara foi projetado para simplificar a vida dos síndicos, condôminos e administradores, tornando a gestão condominial mais eficiente, transparente e agradável.</Text>
        <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
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
          <View>
            <Text style={styles.loginText}>Login</Text>
            <InputField
              label="Usuário"
              type="text"
              variant="standard"
              autoFocus={true}
              value={formData.username}
              onChange={(e) => handleChange(e, 'username')}
            />
            <InputField
              label="Senha"
              type="password"
              variant="standard"
              value={formData.password}
              onChange={(e) => handleChange(e, 'password')}
            />
            <SaveButton onPress={handleLoginSubmit} />
          </View>
        </Animated.View>
      )}

      <CustomSnackbar
        message={snackbar.message}
        severity="error"
        open={snackbar.open}
        onClose={handleSnackbarClose}
      />
    </View>
  );
};

export default Login;
