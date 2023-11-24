import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Text, Image } from 'react-native';
import logo1 from '../../../components/Styles/logo1.svg';
import Header from '../../../components/Header';
import lottie from 'lottie-web';
import { Grid } from '@mui/material';
import styles from './styles';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Inicia o valor de opacidade em 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1, 
        duration: 2000, 
        useNativeDriver: true, 
      }
    ).start(); 
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

// Exemplo de uso:
const MyComponent = () => {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation ({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../components/Animations/powerBI.json')
    })
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FadeInView style={{ width: '100%', height: 10, backgroundColor: 'powderblue' }}>
        <Header/>
        <Grid className='solara' style={styles.solara}>
        <h1>
        Solara                                                                                        
        </h1>
      </Grid>
      <Grid className="texto" style={styles.texto}>
      <Text className="cabecalho" style={styles.cabecalho}><h2>O sistema Solara é uma abrangente e inovadora aplicação web desenvolvida para otimizar a gestão de condomínios e prédios residenciais.</h2></Text>
      <Text className="paragrafo" style={styles.paragrafo}><h3>
      O Solara é uma plataforma abrangente para gestão condominial, oferecendo controle total desde a administração dos edifícios até o gerenciamento de apartamentos, moradores e funcionários. 
      Sua interface permite aos administradores gerenciar facilmente despesas, manutenções, reservas de espaços comuns e comunicações com os residentes. 
      Destaca-se por sua versão mobile projetada para os moradores, permitindo agendar atividades, eventos e reservar espaços comuns diretamente pelo aplicativo, promovendo maior interação comunitária.</h3></Text>
      </Grid>
      <div className='container' ref={container}></div>
      </FadeInView>
    </View>
  );
};

export default MyComponent;
