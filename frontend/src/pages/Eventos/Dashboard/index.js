import React from 'react';
import { Dashboard } from '../../../components/Dashboard';
// import AuthChecker from '../../../components/Authentication';

function Evento() {

  const userInfo = localStorage.getItem("jwtToken")
  const userInfoParsed = JSON.parse(userInfo)

  const deleteFetch = "http://localhost:8080/evento"
  const fetch = `http://localhost:8080/eventos/consultar/${userInfoParsed.user.empresa.id}`

  const renderActiveComponent = () => {
    return (
      <div>
        {/* <AuthChecker> */}
        <Dashboard
        linkFetch={fetch}
        pageTitle='Eventos'
        deleteFetch={deleteFetch}/>

        {/* </AuthChecker> */}
      </div>
    );
  };

  return renderActiveComponent();
}

export default Evento;