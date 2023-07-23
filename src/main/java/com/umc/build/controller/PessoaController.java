package com.umc.build.controller;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Funcionario;
import com.umc.build.model.Morador;
import com.umc.build.service.AbstractPessoaService;
import com.umc.build.service.FuncionarioService;
import com.umc.build.service.MoradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

    @Autowired
    public MoradorService moradorService;
    @Autowired
    public FuncionarioService funcionarioService;
    @Autowired
    public AbstractPessoaService pessoaService;

    @PostMapping("moradorAdicionar")
    public ResponseEntity<String> salvarMorador(@RequestBody Morador morador) {
        //Primeiro salvamos a pessoa
        if (morador.getPessoa() != null) {
            AbstractPessoa pessoa = pessoaService.salvarPessoa(morador.getPessoa());
            morador.setPessoa(pessoa);
        }

        //Salva o morador
        moradorService.salvarMorador(morador);

        return ResponseEntity.ok("Morador Salvo com sucesso!");
    }

    @PostMapping("funcionarioAdicionar")
    public String add(@RequestBody Funcionario funcionario) {
        funcionarioService.salvarFuncionario(funcionario);
        return "Funcionario adicionado";
    }

    @GetMapping("getMorador")
    public List<Morador> getAllMorador() {
        return moradorService.getMorador();
    }
    @GetMapping("getFuncionario")
    public List<Funcionario> getAllFuncionario() {
        return funcionarioService.getFuncionario();
    }

}
