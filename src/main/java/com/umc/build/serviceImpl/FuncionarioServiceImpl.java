package com.umc.build.serviceImpl;

import com.umc.build.model.Funcionario;
import com.umc.build.repository.FuncionarioRepository;
import com.umc.build.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioServiceImpl implements FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;
    @Override
    public Funcionario salvarFuncionario(Funcionario funcionario) {return funcionarioRepository.save(funcionario); }
    @Override
    public List<Funcionario> getFuncionario() {
        return funcionarioRepository.findAll();
    }
}
