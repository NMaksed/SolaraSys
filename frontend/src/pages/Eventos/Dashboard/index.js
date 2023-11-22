import React from 'react';
import { Dashboard } from '../../../components/Dashboard';
// import AuthChecker from '../../../components/Authentication';

function DashboardScreen() {

  const deleteFetch = "http://localhost:8080/evento"

  const renderActiveComponent = () => {
    return (
      <div>
        {/* <AuthChecker> */}
        <Dashboard
        linkFetch='http://localhost:8080/condominio/getEvento'
        pageTitle=' '
        deleteFetch={deleteFetch}/>

        {/* </AuthChecker> */}
      </div>
    );
  };

  return renderActiveComponent();
}

export default DashboardScreen;