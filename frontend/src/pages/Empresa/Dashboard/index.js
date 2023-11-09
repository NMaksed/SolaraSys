import React, { useEffect, useState } from 'react';
import { Dashboard } from '../../../components/Dashboard';

const ConsultaEmpresa = () => {

  const deleteFetch = 'http://localhost:8080/empresa'

  return (
   <>
   <Dashboard
    linkFetch='http://localhost:8080/empresa/getEmpresa'
    pageTitle='Empresa'
    deleteFetch={deleteFetch}/>
   </>
  );
};

export default ConsultaEmpresa;
