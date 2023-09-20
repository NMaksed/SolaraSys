import React, { useState } from 'react';

function FormValidation({ initialValues, validationRules, onSubmit }) {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
    setErrors({ ...errors, [fieldName]: '' });
  };

  const validateField = (fieldName) => {
    const value = formData[fieldName];
    const rules = validationRules[fieldName];

    for (const rule of rules) {
      const { validator, message } = rule;
      if (!validator(value)) {
        setErrors({ ...errors, [fieldName]: message });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    for (const fieldName in validationRules) {
      if (!validateField(fieldName)) {
        newErrors[fieldName] = errors[fieldName];
        isValid = false;
      }
    }

    if (isValid) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render input fields here */}
      <button type="submit">Salvar</button>
    </form>
  );
}

export default FormValidation;
