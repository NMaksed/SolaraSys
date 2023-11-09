import React, { useEffect, useState } from 'react';
import { Dashboard } from '../../../components/Dashboard';

const ConsultaFuncionario = () => {

  const deleteFetch = 'http://localhost:8080/funcionario'

  return (
   <>
   <Dashboard
    linkFetch='http://localhost:8080/funcionario/getFuncionario'
    pageTitle='Funcionarios'
    deleteFetch={deleteFetch}/>
   </>
  );
};

export default ConsultaFuncionario;
