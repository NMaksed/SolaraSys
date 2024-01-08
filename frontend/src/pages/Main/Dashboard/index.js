import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { Grid, Paper } from '@mui/material';
import styles from './styles';
import fone from '../../../components/Styles/fone.png';
import predi from '../../../components/Styles/predi.png';
import calenda from '../../../components/Styles/calenda.png';

// Exemplo de uso:
const MyComponent = () => {
  
  const [numeroMoradores, setNumeroMoradores] = useState(null);

  const userInfo = localStorage.getItem("jwtToken")
  const userInfoParsed = JSON.parse(userInfo)


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
    <>
      <Header />
      <Grid className="container" style={styles.container}>
        <Grid className='paisde2' style={{ width: "100%", height: "100%", margin: "20px", padding: "2%" }}>
          <Grid className='fiodecima' style={{ width: "100%", height: "40%", minWidth: "100px", minHeight: "150px", justifyContent: 'space-around', alignItems: 'center', display: "flex", paddingBottom: "2%" }}>
            <Paper style={styles.boxStyle}>
              <Grid style={{ width: "100%", height: "95%", justifyContent: 'space-around', alignItems: 'center', display: "flex", padding: "10px" }}>
                <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {numeroMoradores !== null ? (
                    <>
                      <h2 style={{ fontSize: 40, margin: "5px" }}>{numeroMoradores}</h2>
                      <h2 style={{ fontSize: 25, margin: '5px' }}>Moradores Cadastrados</h2>
                    </>
                  ) : (
                    <p style={{ margin: '10px' }}>Carregando...</p>
                  )}
                </p>
                <img src={predi} alt="predi" style={{ width: "60%", maxWidth: "150px" }}></img>
              </Grid>
            </Paper>
          </Grid>
          <Grid className='fiodebaxo' style={{ width: "100%", height: "40%", display: "flex", justifyContent: "space-between", }}>
            <Paper className='Assitencias' elevation={5} style={{ width: "25%", height: "100%", borderRadius: '30px', backgroundImage: "linear-gradient(180deg, rgb(219.64, 165.42, 252.88) 8.85%,rgb(197.26, 103.06, 255) 36.84%, rgb(220.68, 164.69, 255) 100%", display: "flex", justifyContent: 'space-around', alignItems: 'center', minWidth: "40%", minHeight: "175px" }}>
              <a href="mailto:sistemsoalara@hotmail.com?subject=Preciso de Ajuda!!&body=Digite o assunto aqui" style={{ textDecoration: "none", color: "black" }}>
                <Grid className="imagemAss" style={{ height: "80%", width: "90%", justifyContent: 'space-around', alignItems: 'center', display: "flex", flexDirection: "column" }}>
                  <img src={fone} alt="fone" style={{ width: "60%", maxWidth: "150px" }}></img>
                  <h2 style={{ fontSize: 20 }}>Assistência</h2>
                </Grid>
              </a>
            </Paper>
            <Paper className='Eventos' elevation={5} style={{ width: "65%", height: "100%", borderRadius: '30px', backgroundImage: "linear-gradient(180deg, rgb(255, 198.79, 132.81) 8.85%,rgb(255, 187.06, 107.31) 36.84%,rgb(255, 230.07, 200.81) 100%", display: "flex", justifyContent: 'space-around', alignItems: 'center', marginLeft: "10px", minWidth: "60%", minHeight: "175px" }}>
              <Grid className="imagemAgenda" style={{ height: "80%", width: "90%", justifyContent: 'space-around', alignItems: 'center', display: "flex" }}>
                <a href='/eventos' style={{ textDecoration: "none", color: "black" }}>
                  <img src={calenda} alt="agenda" style={{ width: "60%", maxWidth: "150px" }}></img>
                </a>
                <h2 style={{ fontSize: 20 }}>Eventos</h2>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyComponent;