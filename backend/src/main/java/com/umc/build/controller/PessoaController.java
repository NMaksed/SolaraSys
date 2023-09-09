package com.umc.build.controller;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.serviceImpl.AbstractPessoaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
@CrossOrigin
public class PessoaController {


    @Autowired
    private AbstractPessoaServiceImpl pessoaService;


    @PostMapping("registro")
    public ResponseEntity<String> registroPessoa(@RequestBody AbstractPessoa pessoa) {
        try {

            pessoaService.salvarPessoa(pessoa);
            return ResponseEntity.ok("Pessoa registrada com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Morador: " + e.getMessage());
        }
    }

    @GetMapping("consultaRegistro")
    public List<AbstractPessoa> getPessoa() {
       return pessoaService.getPessoa();
    }
}
