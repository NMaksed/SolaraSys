import React, { useState, useEffect } from 'react';
import { MenuItem, Select } from '@mui/material';

const MenuItemApartamento = ({ onApartamentoChange, onError }) => {
  const [apartamento, setApartamentos] = useState([]);
  const [apartamentoSelecionado, setApartamentoSelecionado] = useState('');
  const [fetchSucesso, setFetchSucesso] = useState(true);
  const [erroMensagem, setErroMensagem] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/apartamento/getApartamento');
        if (!response.ok) {
          throw new Error('Não foi possível obter a lista de apartamento.');
        }
        const result = await response.json();
        setApartamentos(result);
        setFetchSucesso(true);
        setErroMensagem('');
        if (onError) {
          onError('');
        }
      } catch (error) {
        console.error('Erro ao carregar apartamento:', error);
        setFetchSucesso(false);
        setErroMensagem('Ocorreu um erro ao carregar os apartamentos. Por favor, tente novamente mais tarde.');
        if (onError) {
          onError(error.message);
        }
      }
    };

    fetchData();
  }, [onError]);

  const handleApartamentoChange = (event) => {
    const selectedApartamento = event.target.value;
    const selectedApartamentoId = apartamento.find((apartamento) => apartamento.nome === selectedApartamento)?.id;
    setApartamentoSelecionado(selectedApartamento);
    if (onApartamentoChange) {
      onApartamentoChange(selectedApartamento, selectedApartamentoId);
    }
  };

  return (
    <div>
      {fetchSucesso ? (
        <Select style={{ width: "400px", marginBottom: '16px' }}
          value={apartamentoSelecionado}
          onChange={handleApartamentoChange}
        >
          <MenuItem value="">
            <em>Selecione um apartamento</em>
          </MenuItem>
          {apartamento.map((apartamento) => (
            <MenuItem key={apartamento.id} value={apartamento.nome}>
              {apartamento.nome}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <p>{erroMensagem}</p>
      )}
    </div>
  );
};

export default MenuItemApartamento;