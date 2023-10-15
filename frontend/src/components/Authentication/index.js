import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const AuthChecker = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isValidToken = () => {
      const token = localStorage.getItem('jwtToken'); // Recupera o token do localStorage
      console.log(token, "mama")
      if (!token) {
        return false; // Se o token não estiver presente, é inválido
      }
      return true;
    };
    if (isValidToken()) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  if (isAuthenticated) {
    // Se o usuário estiver autenticado, renderize o conteúdo dos filhos
    return <>{children}</>;
  } else {
    // Se o usuário não estiver autenticado, renderize uma mensagem ou redirecione para a página de login
    return <p>Você não está autenticado. Faça login para acessar esta página.</p>;
  }
};

export default AuthChecker;
