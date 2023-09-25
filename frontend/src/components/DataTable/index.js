import React from 'react';
import { View } from 'react-native';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveIcon from '@mui/icons-material/Save';

const DataTable = ({ data }) => {
  // Verifique se há dados para evitar erros
  if (data.length === 0) {
    return <div>Nenhum dado disponível.</div>;
  }

  // Crie as colunas com base nas chaves do primeiro objeto
  const columns = Object.keys(data[0]).map((key) => ({
    field: key,
    headerName: key,
    width: 175, // Defina a largura desejada para cada coluna
  }));

  // Função para editar uma linha
  const handleEditRow = (row) => {
    // Implemente a lógica de edição aqui
    console.log('Editar', row);
  };

  // Função para apagar uma linha
  const handleDeleteRow = (row) => {
    // Implemente a lógica de exclusão aqui
    console.log('Apagar', row);
  };

  // Função para salvar uma linha editada
  const handleSaveRow = (row) => {
    // Implemente a lógica de salvamento aqui
    console.log('Salvar', row);
  };

  // Renderize os botões de ação
  const renderActionButtons = (params) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Button style={{minWidth: '3px'}} onClick={() => handleEditRow(params.row)}>
          <EditIcon color="warning" fontSize="small"/>
        </Button>
        <Button style={{minWidth: '3px'}} onClick={() => handleDeleteRow(params.row)}>
          <DeleteOutlineIcon color="error" fontSize="small"/>
        </Button>
        <Button style={{minWidth: '3px'}} onClick={() => handleSaveRow(params.row)}>
          <SaveIcon color="success" fontSize="small" />
        </Button>
      </View>
    );
  };

  // Adicione a coluna "ações" à lista de colunas
  columns.push({
    field: 'acoes',
    headerName: 'Ações',
    width: 150,
    renderCell: renderActionButtons,
  });

  return (
    <View style={{ height: '80vh', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
      />
    </View>
  );
};

export default DataTable;
