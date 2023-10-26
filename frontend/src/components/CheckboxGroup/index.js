import React from 'react';
import './CheckboxGroupStyles.css'; // Importe o arquivo CSS aqui

const CheckboxGroup = ({ label, options }) => {
  return (
    <div className="checkbox-group">
      {options.map((option, index) => (
        <div className="checkbox" key={index}>
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={option.value}
              onChange={(e) => option.onChange(e.target.checked)}
            />
            <span className="checkbox-tile">
              <span className="checkbox-icon">
                <img
                  src={option.icon}
                  alt={option.label}
                  style={{ maxWidth: '80px' }} // Ajuste o tamanho máximo aqui
                />
              </span>
              <span className="checkbox-label">{option.label}</span>
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
