import React from 'react';
import { Dashboard } from '../../../components/Dashboard';

const ConsultaCondominio = () => {

  const userInfo = localStorage.getItem("jwtToken")
  const userInfoParsed = JSON.parse(userInfo)

  const deleteFetch = 'http://localhost:8080/condominio'
  const fetch = `http://localhost:8080/condominio/getCondominio/${userInfoParsed.user.empresa.id}`

  return (
   <>
   <Dashboard
    linkFetch={fetch}
    pageTitle='Condominios'
    deleteFetch={deleteFetch}/>
   </>
  );
};

export default ConsultaCondominio;
