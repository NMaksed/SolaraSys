package com.umc.build.serviceImpl;

import com.umc.build.model.Funcionario;
import com.umc.build.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioServiceImpl {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public Funcionario salvarFuncionario(Funcionario funcionario) {return funcionarioRepository.save(funcionario); }

    public List<Funcionario> getFuncionario() {
        return funcionarioRepository.findAll();
    }
}
