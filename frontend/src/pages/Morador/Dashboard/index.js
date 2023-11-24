import React from 'react';
import { Dashboard } from '../../../components/Dashboard';

const ConsultaMorador = () => {

  const deleteFetch = 'http://localhost:8080/morador'

  return (
   <>
   <Dashboard
    linkFetch='http://localhost:8080/morador/consultar'
    pageTitle='Moradores'
    deleteFetch={deleteFetch}
    create={true}/>
   </>
  );
};

export default ConsultaMorador;


{/* import FormCadastro from "../../../components/FormCadastro";

export default function MoradorCadastro() {

  return (
  <FormCadastro
   linkfetch= 'http://localhost:8080/funcionario'
   morador={true}
   funcionario={false} />
)}*/ }