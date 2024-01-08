import { Box, Container, Grid } from "@mui/material";
import Header from "../../Header";
import DataTable from "../../DataTable";
import React, { useEffect, useState } from 'react';
import styles from "./styles";



export default function DashBoardComponent() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/empresa/getEmpresa');
            if (!response.ok) {
              throw new Error('Não foi possível obter os dados da empresa.');
            }
            const result = await response.json();
            setData(result);
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchData();
      }, []);

    
    
    return(
        <>
            <Header/>
            <Container className="container" style={styles.container}>
                <Box className="buttons">

                </Box>
                <Grid className="busca">

                </Grid>
                <Grid className="tabela" style={styles.tabela}>
                   <DataTable data={data} /> 
                </Grid>

            </Container>
        </>
    )
}