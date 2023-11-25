import React from 'react';
import { Dashboard } from '../../../components/Dashboard';

const ConsultaMorador = () => {
  const userInfo = localStorage.getItem("jwtToken")
  const userInfoParsed = JSON.parse(userInfo)

  const fetch = `http://localhost:8080/morador/consultar/${userInfoParsed.user.empresa.id}`
  const deleteFetch = 'http://localhost:8080/morador'


  return (
   <>
   <Dashboard
    linkFetch={fetch}
    pageTitle='Moradores'
    deleteFetch={deleteFetch}
    create={true}/>
   </>
  );
};

export default ConsultaMorador;