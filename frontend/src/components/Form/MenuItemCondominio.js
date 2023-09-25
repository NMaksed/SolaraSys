import React, { useState, useEffect } from 'react';
import { MenuItem, Select } from '@mui/material';

const MenuItemCondominio = ({ onCondominioChange, onError }) => {
  const [condominios, setCondominios] = useState([]);
  const [condominioSelecionado, setCondominioSelecionado] = useState('');
  const [fetchSucesso, setFetchSucesso] = useState(true);
  const [erroMensagem, setErroMensagem] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/condominio/getCondominio');
        if (!response.ok) {
          throw new Error('Não foi possível obter a lista de condomínios.');
        }
        const result = await response.json();
        setCondominios(result);
        setFetchSucesso(true);
        setErroMensagem('');
        if (onError) {
          onError('');
        }
      } catch (error) {
        console.error('Erro ao carregar condomínios:', error);
        setFetchSucesso(false);
        setErroMensagem('Ocorreu um erro ao carregar os condomínios. Por favor, tente novamente mais tarde.');
        if (onError) {
          onError(error.message);
        }
      }
    };

    fetchData();
  }, [onError]);

  const handleCondominioChange = (event) => {
    const selectedCondominio = event.target.value;
    const selectedCondominioId = condominios.find((condominio) => condominio.nome === selectedCondominio)?.id;
    setCondominioSelecionado(selectedCondominio);
    if (onCondominioChange) {
      onCondominioChange(selectedCondominio, selectedCondominioId);
    }
  };

  return (
    <div>
      {fetchSucesso ? (
        <Select style={{ width: "400px", marginBottom: '16px' }}
          value={condominioSelecionado}
          onChange={handleCondominioChange}
        >
          <MenuItem value="">
            <em>Selecione um condomínio</em>
          </MenuItem>
          {condominios.map((condominio) => (
            <MenuItem key={condominio.id} value={condominio.nome}>
              {condominio.nome}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <p>{erroMensagem}</p>
      )}
    </div>
  );
};

export default MenuItemCondominio;