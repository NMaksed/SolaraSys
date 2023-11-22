import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Text, Image } from 'react-native';
import logo1 from '../../../components/Styles/logo1.svg';
import Header from '../../../components/Header';
import lottie from 'lottie-web';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Inicia o valor de opacidade em 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1, 
        duration: 1000, 
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
      <FadeInView style={{ width: '100%', height: 50, backgroundColor: 'powderblue' }}>
        <Header/>
      <Image alt="Solara" source={logo1} />
      <div className='container' ref={container}></div>

      <Text>O sistema Solara é uma abrangente e inovadora aplicação web desenvolvida para otimizar a gestão de condomínios e prédios residenciais. Com uma gama de recursos e funcionalidades, essa plataforma oferece controle completo sobre as operações condominiais, desde a administração dos edifícios até o gerenciamento dos apartamentos, moradores e funcionários.

Através da interface intuitiva e amigável, os administradores podem facilmente gerenciar informações cruciais, como despesas, manutenções, reservas de espaços comuns e comunicações com os residentes. Além disso, o Solara oferece ferramentas para a gestão de documentos e registros, simplificando processos burocráticos e aumentando a eficiência operacional.

Uma das características marcantes do sistema é a sua versão mobile, especialmente projetada para os moradores. Essa aplicação permite que os residentes agendem atividades, eventos e reservem espaços comuns diretamente pelo aplicativo, promovendo uma maior interação e engajamento na vida comunitária.

Com foco na praticidade, segurança e comodidade, o Solara visa aprimorar a experiência de moradia em condomínios, proporcionando uma plataforma completa e integrada que facilita a comunicação, organização e interação entre todos os envolvidos na comunidade residencial.</Text>
      </FadeInView>
    </View>
  );
};

export default MyComponent;
