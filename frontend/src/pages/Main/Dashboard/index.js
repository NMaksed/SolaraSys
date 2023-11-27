import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { Container, Paper } from '@mui/material';
import styles from './styles';
import fone from '../../../components/Styles/fone.png';
import predi from '../../../components/Styles/predi.png';
import calenda from '../../../components/Styles/calenda.png';

// Exemplo de uso:
const MyComponent = () => {

  const [numeroFuncionarios, setNumeroFuncionarios] = useState(null);
  const [nomeCondominio, setNomeCondominio] = useState(null);
  const [numeroPredio, setNumeroPredio] = useState(null);
  const [numeroMoradores, setNumeroMoradores] = useState(null);

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


  useEffect(() => {
    const fetchNumeroMoradores = async () => {
      try {
        const response = await fetch(`http://localhost:8080/morador/numeroMoradores/${userInfoParsed.user.empresa.id}`);
        if (!response.ok) {
          throw new Error('Não foi possível obter o número de prédios.');
        }
        const data = await response.text();
        setNumeroMoradores(data);
      } catch (error) {
        console.error('Erro ao obter número de prédios:', error);
      }
    };

    fetchNumeroMoradores();
  }, []);




  return (
    <div style={styles.page}>
      <Header />
      <Container style={{ marginTop: "50px" }}>
        <div className='teste' style={{ height: "257px", width: "1100px", display: "flex" }}>
          <Paper style={styles.boxStyle}>
            <div style ={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              {numeroMoradores !== null ? (
                <h2>{numeroMoradores}</h2>
              ) : (
                <p style={{ margin: '10px'}}>Carregando...</p>
              )}
              <p style={{ fontSize: '30px',margin: '10px' }}>Moradores Cadastrados</p>
            </div>
            <div >
              <img src={predi} alt="predi"></img>
            </div>
          </Paper>
          <Paper style={{ height: "565px", width: "330px", background: "snow", marginLeft: "20px", borderRadius: '30px', }}>
            <div style={{ marginLeft: "22px", marginTop: "50px" }}>
              <Paper className="nome" style={styles.nome}>
                <p style={{ fontSize: '30px', margin: '4px' }}>Condominio</p>
                {nomeCondominio !== null ? (
                  <h2 style={{fontSize: '30px', margin: '3px' }}>{nomeCondominio}</h2>
                ) : (
                  <p>Carregando...</p>
                )}
              </Paper>
              <Paper className='funcionario' style={styles.funcionario}>
                {numeroFuncionarios !== null ? (
                  <h1>{numeroFuncionarios}</h1>
                ) : (
                  <p>Carregando...</p>
                )}
                <h2>Funcionários</h2>
              </Paper>
              <Paper style={styles.funcionario}>
                {numeroPredio !== null ? (
                  <h1>{numeroPredio}</h1>
                ) : (
                  <p>Carregando...</p>
                )}
                <h2>Blocos</h2>
              </Paper>
            </div>
          </Paper>
        </div>
        <div className='teste1' style={{ display: "flex", marginTop: "20px", width: "100%" }}>
          <Paper style={{ height: "285px", width: "228px", background: "snow", borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img src={fone} alt="fone"></img>
            <h2>Assistência</h2>
          </Paper>
          <Paper style={{ height: "285px", width: "484px", background: "snow", marginLeft: "30px", borderRadius: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <div >
              <img src={calenda} alt="agenda"></img>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <h2 style={{ marginTop: '5px' }}>Agendamentos</h2>
              <div style={{ display: 'flex' }}>
                <div>
                  <p style={{ margin: '4px' }}>Churrasqueira</p>
                  <p style={{ margin: '4px' }}>Salão de Festas</p>
                </div>
                {/* <div>
                  <h4 style={{ margin: '4px' }}>SIM</h4>
                  <h4 style={{ margin: '4px' }}>NAO</h4>
                </div> */}
              </div>
            </div>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default MyComponent;
