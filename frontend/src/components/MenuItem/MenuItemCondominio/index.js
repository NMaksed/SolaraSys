import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const MenuItemCondominio = () => {
  const [condominios, setCondominios] = useState([]);
  const [condominioSelecionado, setCondominioSelecionado] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/condominio/getCondominio');
      const result = await response.json();
      setCondominios(result);
    };

    fetchData();
  }, []);

  const handleCondominioChange = (event) => {
    setCondominioSelecionado(event.target.value);
  };

  return (
    <div>
      <Select style={{ width: "400px"}}
        value={condominioSelecionado}
        onChange={handleCondominioChange}
      >
        {condominios.map((condominio) => (
          <MenuItem key={condominio.id} value={condominio.nome}>
            {condominio.nome}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default MenuItemCondominio;
