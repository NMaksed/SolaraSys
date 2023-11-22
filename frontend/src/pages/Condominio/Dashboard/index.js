import React from 'react';
import { Dashboard } from '../../../components/Dashboard';

const ConsultaCondominio = () => {

  const deleteFetch = 'http://localhost:8080/condominio'

  return (
   <>
   <Dashboard
    linkFetch='http://localhost:8080/condominio/getCondominio'
    pageTitle='Condominios'
    deleteFetch={deleteFetch}/>
   </>
  );
};

export default ConsultaCondominio;
