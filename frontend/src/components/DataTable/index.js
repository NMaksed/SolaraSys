import React from 'react';
import { View } from 'react-native';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { enqueueSnackbar, useSnackbar } from 'notistack';
import styled from 'styled-components';

const DataTable = ({ data, selectedRow, deleteFetch }) => {

  const userInfo = localStorage.getItem("jwtToken")
  const userInfoParsed = JSON.parse(userInfo)

  const { enqueueSnackbar } = useSnackbar();

  // Verifique se há dados para evitar erros
  if (data.length === 0) {
    return <div>Nenhum dado disponível.</div>;
  }

  const CustomDataGrid = styled(DataGrid)({
    borderRadius: '8px', // Adiciona um border-radius de 8px
    // Outros estilos desejados podem ser adicionados aqui
  });

  // Crie as colunas com base nas chaves do primeiro objeto
  const columns = Object.keys(data[0]).map((key) => ({
    field: key,
    headerName: key,
    width: 175, // Defina a largura desejada para cada coluna
  }));

  const renderBooleanValue = (params) => {
    return params.value ? 'Sim' : 'Não';
  };

  const updatedColumns = columns.map((column) => {
    if (column.field === 'atribuido' || column.field === 'visitante' || column.field === 'exame' || 
    column.field === 'representante' || column.field === 'churrasqueira'|| column.field === 'piscina'
    || column.field === 'salao') { // Substitua 'ativo' pelo nome da sua coluna booleana
      return {
        ...column,
        renderCell: renderBooleanValue, // Use a função de renderização para essa coluna
      };
    }
    return column;
  });

    // Função para editar uma linha
    const handleEditRow = (row) => {
      // Implemente a lógica de edição aqui
      console.log('Editar', row);
    };
  
    // Função para apagar uma linha
    const handleDeleteRow = async (row) => {
      try {
        const response = await fetch(`${deleteFetch}/delete/${row.id}/${userInfoParsed.user.empresa.id}`, {
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

  updatedColumns.push({
    field: 'acoes',
    headerName: 'Ações',
    width: 150,
    renderCell: renderActionButtons,
  });

  return (
    <View style={{ height: '80vh', width: '100%' }}>
      <CustomDataGrid
        rows={data}
        columns={updatedColumns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        selectedRow={selectedRow}
      />
    </View>
  );
};

export default DataTable;
