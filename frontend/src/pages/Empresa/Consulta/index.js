import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/DataTable';

const ConsultaEmpresa = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/empresa/getEmpresa');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Empresas</h1>
      <DataTable data={data}/>
    </div>
  );
};

export default ConsultaEmpresa;
