package com.umc.build.controller;

import com.umc.build.dto.FuncionarioDTO;
import com.umc.build.model.Funcionario;
import com.umc.build.serviceImpl.AbstractPessoaServiceImpl;
import com.umc.build.serviceImpl.FuncionarioServiceImpl;
import org.apache.coyote.Response;
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

    @PostMapping("/salvar/{id}")
    public ResponseEntity<String> add(@RequestBody FuncionarioDTO funcionarioDTO, @PathVariable("id") Integer condominioId) {
        try {
            funcionarioService.validateCondominioFuncionario(condominioId);
            funcionarioService.builderPessoaFuncionario(funcionarioDTO, condominioId);
            return ResponseEntity.ok("Novo funcionário adicionado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Funcionario: " + e.getMessage());
        }
    }

    @GetMapping("/consultar/{empresa}")
    public List<Funcionario> getFuncionario(@PathVariable Integer empresa) {
        return funcionarioService.getFuncionario(empresa);
    }


    @DeleteMapping("/delete/{id}/{empresa}")
    public ResponseEntity<String> deletarFuncionario(@PathVariable Integer id, @PathVariable Integer empresa) {
        try {
            funcionarioService.deletar(id, empresa);
            return ResponseEntity.ok("Funcionario Apagado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Empresa: " + e.getMessage());
        }
    }

    @GetMapping("/numeroFuncionario/{empresa}")
    public ResponseEntity<String> numeroFuncionarios(@PathVariable Integer empresa) {
        try {
           Integer numero = funcionarioService.numeroFuncionarios(empresa);
           return ResponseEntity.ok(""+numero);
        }   catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro");
        }
    }

    @GetMapping("/nomeCondominio/{empresa}")
    public ResponseEntity<String> nomeCondominio(@PathVariable Integer empresa) {
        try {
            String nome = funcionarioService.nomeCondominio(empresa);
            return ResponseEntity.ok(nome);
        }  catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro");
        }
    }
}
