import React, { useEffect, useState, useCallback     } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton, Button,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "../DataTable/index";
import Header from "../Header";
import FormCadastro from "../FormCadastro";

export const Dashboard = ({ linkFetch, pageTitle = 'Título Modificável', deleteFetch, create }) => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const fetchData = useCallback(async () => {
    if (!linkFetch) {
      setError("A URL de solicitação está vazia. Por favor, forneça uma URL válida.");
      return;
    }

    try {
      const response = await fetch(linkFetch);
      if (!response.ok) {
        throw new Error("Não foi possível obter os dados da empresa.");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  }, [linkFetch]);

  useEffect(() => {
    fetchData();
  }, [fetchData, linkFetch]);

  const handleCriar = () => {
    if (pageTitle === 'Morador') {
    return (
      <>
      <FormCadastro
      linkfetch={linkFetch}
      morador={true}
      />
      </>
    )
    }
    else if (pageTitle === 'Funcionario') {
      return (
        <>
        <FormCadastro
        linkfetch={linkFetch}
        funcionario={true}
        />
        </>
      )
    }
  };

  const handleBusca = () => {
    if (searchTerm) {
      const filteredData = data.filter((row) => {
        // Modifique esta lógica para corresponder aos campos de busca apropriados em seus dados
        return (
          row.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setData(filteredData);
    } else {
      // Se o campo de busca estiver vazio, redefina os dados para a versão original
      fetchData(); // Ou a função que busca os dados iniciais
    }
  };

  return (
    <>
      <Header />
      <Container style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Grid container alignItems="center" justifyContent="space-between" padding={1}>
          <Grid item>
            <Typography variant="h5">{pageTitle}</Typography>
          </Grid>
          <Grid item>
            {create && (
            <IconButton color="primary" onClick={handleCriar}>
              <AddIcon />
              Criar
            </IconButton>
            )}
          </Grid>
        </Grid>

        <Box className="busca" style={{ display: "flex" }} padding={1}>
          <TextField
            style={{ paddingRight: 30 }}
            label="Buscar"
            variant="outlined"
            size="small"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            style={{ borderRadius: 20, backgroundColor: "darkblue", padding: "0 30px" }}
            variant="contained"
            size="small"
            onClick={handleBusca}
          >
            Buscar
          </Button>
        </Box>

        <Box className="tabela" style={{ flex: 1, padding: "10px" }}>
          {error ? (
            <div>{error}</div>
          ) : (
            <DataTable
              data={data}
              selectedRow={selectedRow}
              linkfetch={linkFetch}
              deleteFetch={deleteFetch}
              setSelectedRow={setSelectedRow}
            />
          )}
        </Box>
      </Container>
    </>
  );
};
