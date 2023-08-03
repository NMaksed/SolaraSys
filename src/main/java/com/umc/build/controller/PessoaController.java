package com.umc.build.controller;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Funcionario;
import com.umc.build.model.Morador;
import com.umc.build.service.AbstractPessoaService;
import com.umc.build.service.FuncionarioService;
import com.umc.build.service.MoradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

    @Autowired
    private MoradorService moradorService;
    @Autowired
    private FuncionarioService funcionarioService;
    @Autowired
    private AbstractPessoaService pessoaService;


    @PostMapping("moradorAdicionar")
    public ResponseEntity<String> salvarMorador(@RequestBody Morador moradorDto) {
        try {
            //Verifica se a pessoa já existe
            AbstractPessoa pessoa = pessoaService.buscarPorCpf(moradorDto.getCpf());

            if (pessoa == null) {
                pessoa = new AbstractPessoa();
                pessoa.setNome(moradorDto.getNome());
                pessoa.setIdade(moradorDto.getIdade());
                pessoa.setRg(moradorDto.getRg());
                pessoa.setCpf(moradorDto.getCpf());
                pessoa.setCep(moradorDto.getCep());

                pessoa = pessoaService.salvarPessoa(pessoa);
            }
                Morador morador = new Morador();
                morador.setMorador(true);
                morador.setMoradorVinculado(moradorDto.getMoradorVinculado());
                morador.setMorador(moradorDto.getMorador());
                morador.setExame(moradorDto.getExame());
                morador.setPessoa(pessoa);

                morador = moradorService.salvarMorador(morador);
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
