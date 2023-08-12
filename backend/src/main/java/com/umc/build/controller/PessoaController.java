package com.umc.build.controller;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Funcionario;
import com.umc.build.model.Morador;
import com.umc.build.serviceImpl.AbstractPessoaServiceImpl;
import com.umc.build.serviceImpl.FuncionarioServiceImpl;
import com.umc.build.serviceImpl.MoradorServiceImpl;
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
    private MoradorServiceImpl moradorService;
    @Autowired
    private FuncionarioServiceImpl funcionarioService;
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

    @PostMapping("moradorAdicionar")
    public ResponseEntity<String> salvarMorador(@RequestBody Morador morador) {
        try {
                moradorService.salvarMorador(morador);
                return ResponseEntity.ok("Morador criado com sucesso!");
            } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Morador: " + e.getMessage());
            }
    }



    @PostMapping("funcionarioAdicionar")
    public ResponseEntity<String> add(@RequestBody Funcionario funcionario) {
        AbstractPessoa pessoa = new AbstractPessoa();
        if (funcionario.getPessoa() != null) {
            if (pessoa.getCpf() == funcionario.getPessoa().getCpf()) {
                pessoa = pessoaService.salvarPessoa(funcionario.getPessoa());
                funcionario.setPessoa(pessoa);
            }
        }
        funcionarioService.salvarFuncionario(funcionario);
        return ResponseEntity.ok("Funcionario adicionado!");
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
