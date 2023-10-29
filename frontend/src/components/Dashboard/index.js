import React, { useEffect, useState, useCallback     } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "../DataTable/index";
import Header from "../Header";

export const Dashboard = ({ linkFetch ='http://localhost:8080/morador/getMorador' }) => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [error, setError] = useState(null);
  const [newData, setNewData] = useState({}); // Estado para armazenar novos dados ao criar
  const [isEditing, setIsEditing] = useState(false);
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

  const handleEditar = () => {
    if (selectedRow) {
      setIsEditing(true);
    }
  };

  const handleCancelarEdicao = () => {
    setIsEditing(false);
    setSelectedRow(null);
  };

  const handleSalvarEdicao = () => {
    if (selectedRow) {
      const updatedData = data.map((row) =>
        row.id === selectedRow.id ? { ...row, ...selectedRow } : row
      );
      setData(updatedData);
      setIsEditing(false);
      setSelectedRow(null);
    }
  };

  const handleCriar = () => {
    if (newData) {
      // Suponha que os novos dados tenham um campo 'id' único, adicione lógica para gerar um novo ID
      const newId = Math.max(...data.map((row) => row.id), 0) + 1;
      const newDataWithId = { id: newId, ...newData };
      const updatedData = [...data, newDataWithId];
      setData(updatedData);
      setNewData({});
    }
  };

  const handleExcluir = () => {
    if (selectedRow) {
      const updatedData = data.filter((row) => row.id !== selectedRow.id);
      setData(updatedData);
      setSelectedRow(null);
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
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Título Modificável</Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" onClick={handleEditar}>
              <EditIcon />
              Editar
            </IconButton>
            <IconButton color="primary" onClick={handleCriar}>
              <AddIcon />
              Criar
            </IconButton>
            <IconButton color="secondary" onClick={handleExcluir}>
              <DeleteIcon />
              Excluir
            </IconButton>
          </Grid>
        </Grid>

        <Box className="busca">
        <TextField
            label="Buscar"
            variant="outlined"
            size="small"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton color="primary" size="small" onClick={handleBusca}>
            Buscar
        </IconButton>
        </Box>

        <Box className="tabela">
          {error ? (
            <div>{error}</div>
          ) : (
            <DataTable
              data={data}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
              isEditing={isEditing}
              newData={newData}
              setNewData={setNewData}
              onSave={handleSalvarEdicao}
              onCancelEdit={handleCancelarEdicao}
            />
          )}
        </Box>
      </Container>
    </>
  );
};
