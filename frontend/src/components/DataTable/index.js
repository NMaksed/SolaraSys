import React from 'react';
import { View } from 'react-native';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { enqueueSnackbar, useSnackbar } from 'notistack';

const DataTable = ({ data, selectedRow, deleteFetch }) => {

  const { enqueueSnackbar } = useSnackbar();

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
    const handleDeleteRow = async (row) => {
      try {
        const response = await fetch(`${deleteFetch}/delete/${row.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        }); 
        if (response.ok) {
          enqueueSnackbar('Empresa Apagada', { variant: 'success' });
      } else {
        enqueueSnackbar('Erro ao apagar empresa', { variant: 'error' });
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      enqueueSnackbar('Problema ao se conectar com o servidor', { variant: 'error' });
  }} ;

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
      </View>
    );
  };

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
        selectedRow={selectedRow}
      />
    </View>
  );
};

export default DataTable;
