import React, { useState } from 'react';
import { View } from 'react-native';
import { DataGrid } from '@mui/x-data-grid';

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
