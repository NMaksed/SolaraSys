import React, { useEffect, useState } from 'react';
import { Dashboard } from '../../../components/Dashboard';

const ConsultaMorador = () => {

  const deleteFetch = 'http://localhost:8080/morador'

  return (
   <>
   <Dashboard
    linkFetch='http://localhost:8080/morador/getMorador'
    pageTitle='Moradores'
    deleteFetch={deleteFetch}/>
   </>
  );
};

export default ConsultaMorador;
