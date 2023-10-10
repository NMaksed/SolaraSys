import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const AuthChecker = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isValidToken = () => {
      const token = localStorage.getItem('jwtToken'); // Recupera o token do localStorage
      console.log(token, "tome")
      if (!token) {
        return false; // Se o token não estiver presente, é inválido
      }

      try {
        const decodedToken = jwt_decode(token); // Decodifica o token JWT
        console.log('Token Decodificado:', decodedToken);
        // Verifica se o token expirou
        const currentTime = Date.now() / 1000; // Em segundos
        if (decodedToken.exp < currentTime) {
          return false; // O token expirou
        }

        // Você pode adicionar outras verificações personalizadas aqui, se necessário

        return true; // O token é válido
      } catch (error) {
        return false; // O token é inválido ou não pôde ser decodificado
      }
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
