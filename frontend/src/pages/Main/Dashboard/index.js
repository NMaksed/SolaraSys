import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Text } from 'react-native';
import Header from '../../../components/Header';
import lottie from 'lottie-web';
import { Container, Grid, Paper } from '@mui/material';
import styles from './styles';

// Exemplo de uso:
const MyComponent = () => {

  const [numeroFuncionarios, setNumeroFuncionarios] = useState(null);
  const [nomeCondominio, setNomeCondominio] = useState(null);
  const [numeroPredio, setNumeroPredio] = useState(null);

  const userInfo = localStorage.getItem("jwtToken")
  const userInfoParsed = JSON.parse(userInfo)


  useEffect(() => {
    const fetchNumeroFuncionarios = async () => {
      try {
        const response = await fetch(`http://localhost:8080/funcionario/numeroFuncionario/${userInfoParsed.user.empresa.id}`);
        if (!response.ok) {
          throw new Error('Não foi possível obter o número de funcionários.');
        }
        const data = await response.text();
        setNumeroFuncionarios(data);
      } catch (error) {
        console.error('Erro ao obter número de funcionários:', error);
      }
    };

    fetchNumeroFuncionarios();
  }, []);

  useEffect(() => {
    const fetchNomeCondominio = async () => {
      try {
        const response = await fetch(`http://localhost:8080/funcionario/nomeCondominio/${userInfoParsed.user.empresa.id}`);
        if (!response.ok) {
          throw new Error('Não foi possível obter o nome do condomínio.');
        }
        const data = await response.text();
        setNomeCondominio(data);
      } catch (error) {
        console.error('Erro ao obter nome do condomínio:', error);
      }
    };

    fetchNomeCondominio();
  }, []);

  useEffect(() => {
    const fetchNumeroPredio = async () => {
      try {
        const response = await fetch(`http://localhost:8080/predio/numeroPredio/${userInfoParsed.user.empresa.id}`);
        if (!response.ok) {
          throw new Error('Não foi possível obter o número de prédios.');
        }
        const data = await response.text();
        setNumeroPredio(data);
      } catch (error) {
        console.error('Erro ao obter número de prédios:', error);
      }
    };

    fetchNumeroPredio();
  }, []);




  return (
    <div style={styles.page}>
      <Header />
      <Container style={{ marginTop: "50px" }}>
        <div className='teste' style={{ height: "257px", width: "1100px", display: "flex" }}>
          <Paper style={styles.boxStyle}>
            numeroMoradores
          </Paper>
          <Paper style={{ height: "565px", width: "330px", background: "snow", marginLeft: "20px" }}>
            <div style={{ marginLeft: "22px", marginTop: "50px" }}>
              <Paper className="nome" style={styles.nome}>
                <h2>Nome do Condomínio:</h2>
                {nomeCondominio !== null ? (
                  <p>{nomeCondominio}</p>
                ) : (
                  <p>Carregando...</p>
                )}
              </Paper>
              <Paper className='funcionario' style={styles.funcionario}>
                <h2>Número de Funcionários:</h2>
                {numeroFuncionarios !== null ? (
                  <p>{numeroFuncionarios}</p>
                ) : (
                  <p>Carregando...</p>
                )}
              </Paper>
              <Paper style={styles.funcionario}>
                <div>
                  <h2>Número de Prédios:</h2>
                  {numeroPredio !== null ? (
                    <p>{numeroPredio}</p>
                  ) : (
                    <p>Carregando...</p>
                  )}
                </div>
              </Paper>
            </div>
          </Paper>
        </div>
        <div className='teste1' style={{ display: "flex", marginTop: "20px", width: "100%" }}>
          <Paper style={{ height: "285px", width: "228px", background: "snow" }}>
            <h2>SUGOIII</h2>
          </Paper>
          <Paper style={{ height: "285px", width: "484px", background: "snow", marginLeft: "30px" }}>
            <h2>receba</h2>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default MyComponent;
