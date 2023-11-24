import React from 'react';
import { Dashboard } from '../../../components/Dashboard';

const ConsultaFuncionario = () => {

  const deleteFetch = 'http://localhost:8080/funcionario'

  return (
   <>
   <Dashboard
    linkFetch='http://localhost:8080/funcionario/consultar'
    pageTitle='Funcionarios'
    deleteFetch={deleteFetch}
    create={true}/>
   </>
  );
};

export default ConsultaFuncionario;
