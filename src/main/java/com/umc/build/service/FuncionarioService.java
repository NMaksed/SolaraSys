package com.umc.build.service;

import com.umc.build.model.Funcionario;

import java.util.List;

public interface FuncionarioService {

    public Funcionario salvarFuncionario(Funcionario funcionario);
    public List<Funcionario> getFuncionario();
}
