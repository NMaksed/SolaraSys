import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DataTable from '../../../components/DataTable/index';

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
    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <h1>Empresas</h1>
      {error ? (
        <p>Falha de conexão: {error}</p>
      ) : (
        <DataTable data={data} />
      )}
    </View>
  );
};

export default ConsultaEmpresa;
