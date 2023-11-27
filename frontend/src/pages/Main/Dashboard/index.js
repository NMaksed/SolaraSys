import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Text } from 'react-native';
import Header from '../../../components/Header';
import lottie from 'lottie-web';
import { Container, Grid, Paper } from '@mui/material';
import styles from './styles';

// Exemplo de uso:
const MyComponent = () => {

  const [data, setData] = useState([]);

const userInfo = localStorage.getItem("jwtToken")
const userInfoParsed = JSON.parse(userInfo)




const fetchFuncionarioNum = async () => {
  try {
    const url = `http://localhost:8080/funcionario/numeroFuncionario/${userInfoParsed.user.empresa.id}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Adicione headers adicionais, se necessário
      },
    });

    if (!response.ok) {
      throw new Error("Não foi possível obter os dados do funcionário.");
    }

    const result = await response.json();
    console.log('Dados do funcionário:', result);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};

useEffect(() => {
  fetchFuncionarioNum();
}, []);
console.log(data)

  return (
    <div style={styles.page}>
        <Header/>
      <Container style={{marginTop: "50px"}}>
        <div className='teste' style={{height: "257px", width: "1100px", display: "flex"}}>
        <Paper style={styles.boxStyle}>
        <p>{data}</p>
        </Paper>
        <Paper style={{height: "565px", width: "330px", background: "snow", marginLeft: "20px"}}>
          <div style={{marginLeft: "22px", marginTop: "50px"}}>
          <Paper className="nome" style={styles.nome}>

          </Paper>
          <Paper className='funcionario' style={styles.funcionario}>

          </Paper>
          <Paper style={styles.funcionario}>

          </Paper>
          </div>
        </Paper>
        </div>
        <div className='teste1' style={{display: "flex", marginTop: "20px", width: "100%"}}>
        <Paper style={{height: "285px", width: "228px", background: "snow"}}>
        </Paper>
        <Paper style={{height: "285px", width: "484px", background: "snow", marginLeft: "30px"}}>
        </Paper>
        </div>
      </Container>
      </div>
  );
};

export default MyComponent;
