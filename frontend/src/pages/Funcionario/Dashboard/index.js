import React from 'react';
import { Dashboard } from '../../../components/Dashboard';

const ConsultaFuncionario = () => {

  const userInfo = localStorage.getItem("jwtToken")
  const userInfoParsed = JSON.parse(userInfo)

  const deleteFetch = 'http://localhost:8080/funcionario'
  const fetch = `http://localhost:8080/funcionario/consultar/${userInfoParsed.user.empresa.id}`


  return (
   <>
   <Dashboard
    linkFetch={fetch}
    pageTitle='Funcionarios'
    deleteFetch={deleteFetch}
    create={true}/>
   </>
  );
};

export default ConsultaFuncionario;
