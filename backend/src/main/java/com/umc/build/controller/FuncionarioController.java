package com.umc.build.controller;

import com.umc.build.model.Funcionario;
import com.umc.build.serviceImpl.FuncionarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/funcionario")
public class FuncionarioController {

    @Autowired
    public FuncionarioServiceImpl funcionarioService;

    @PostMapping("/salvar")
    public String add(@RequestBody Funcionario funcionario) {
        funcionarioService.salvarFuncionario(funcionario);
        return "Funcionario adicionado";
    }

    @GetMapping("/consultar")
    public List<Funcionario> getFuncionario() {
        return funcionarioService.getFuncionario();
    }
}
