package com.umc.build.controller;

import com.umc.build.dto.FuncionarioDTO;
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
@CrossOrigin
@RequestMapping("/funcionario")
public class FuncionarioController {

    @Autowired
    public FuncionarioServiceImpl funcionarioService;
    @Autowired
    public AbstractPessoaServiceImpl pessoaService;

    @PostMapping("/salvar{id}")
    public ResponseEntity<String> add(@RequestBody FuncionarioDTO funcionarioDTO, @RequestParam("id") Integer condominioId) {
        try {
            funcionarioService.validateCondominioFuncionario(condominioId);
<<<<<<< Updated upstream
            if (funcionarioDTO.getPessoa() == null || funcionarioDTO.getPessoa().getId() == null) {
                funcionarioService.builderPessoaFuncionario(funcionarioDTO);
            }
            funcionarioService.validatePessoaFuncionario(funcionarioDTO.getPessoa().getId());
            funcionarioService.salvarFuncionario(funcionarioDTO);
=======
            funcionarioService.builderPessoaFuncionario(funcionarioDTO, condominioId);
>>>>>>> Stashed changes
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
