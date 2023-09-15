import * as React from 'react';
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
    width: 180, // Defina a largura desejada para cada coluna
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
