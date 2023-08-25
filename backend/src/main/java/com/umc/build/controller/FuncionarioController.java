package com.umc.build.controller;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Funcionario;
import com.umc.build.serviceImpl.AbstractPessoaServiceImpl;
import com.umc.build.serviceImpl.FuncionarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/funcionario")
public class FuncionarioController {

    @Autowired
    public FuncionarioServiceImpl funcionarioService;
    @Autowired
    public AbstractPessoaServiceImpl pessoaService;

    @PostMapping("/salvar")
    public ResponseEntity<String> add(@RequestBody Funcionario funcionarioDTO) {
        try {
            AbstractPessoa pessoa = pessoaService.buscarPorCpf(funcionarioDTO.getPessoa().getCpf());


            // Se a pessoa não existir, cria uma nova pessoa
            if (pessoa == null) {
                pessoa = new AbstractPessoa();
                pessoa.setNome(funcionarioDTO.getPessoa().getNome());
                pessoa.setIdade(funcionarioDTO.getPessoa().getIdade());
                pessoa.setCep(funcionarioDTO.getPessoa().getCep());
                pessoa.setRg(funcionarioDTO.getPessoa().getRg());
                pessoa.setCpf(funcionarioDTO.getPessoa().getCpf());

                pessoa = pessoaService.salvarPessoa(pessoa);
            }
            // Cria o funcionario e associa à pessoa existente ou recém-criada
            Funcionario funcionario = new Funcionario();
            funcionario.setFuncao(funcionarioDTO.getFuncao());
            funcionario.setSalario(funcionario.getSalario());
            funcionario.setPessoa(pessoa);

            funcionarioService.salvarFuncionario(funcionario);
            return ResponseEntity.ok("Novo funcionário adicionado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Funcionario: " + e.getMessage());
        }
    }

    @GetMapping("/consultar")
    public List<Funcionario> getFuncionario() {
        return funcionarioService.getFuncionario();
    }
}
