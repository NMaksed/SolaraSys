import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/DataTable';

const ConsultaEmpresa = () => {
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

  return (
    <div>
      <h1>Empresas</h1>
      {error ? (
        <p>Falha de conexão: {error}</p>
      ) : (
        <DataTable data={data} />
      )}
    </div>
  );
};

export default ConsultaEmpresa;
