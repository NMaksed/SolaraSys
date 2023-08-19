package com.umc.build.controller;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Morador;
import com.umc.build.serviceImpl.AbstractPessoaServiceImpl;
import com.umc.build.serviceImpl.MoradorServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/morador")
public class MoradorController {

    @Autowired
    public MoradorServiceImpl moradorService;
    @Autowired
    public AbstractPessoaServiceImpl pessoaService;

    @PostMapping("/salvar")
    public ResponseEntity<String> add(@RequestBody Morador moradorDTO) {
        try {
            AbstractPessoa pessoa = pessoaService.buscarPorCpf(moradorDTO.getPessoa().getCpf());

            // Se a pessoa não existir, cria uma nova pessoa
            if (pessoa == null) {
                pessoa = new AbstractPessoa();
                pessoa.setNome(moradorDTO.getPessoa().getNome());
                pessoa.setIdade(moradorDTO.getPessoa().getIdade());
                pessoa.setCep(moradorDTO.getPessoa().getCep());
                pessoa.setRg(moradorDTO.getPessoa().getRg());
                pessoa.setCpf(moradorDTO.getPessoa().getCpf());

                pessoa = pessoaService.salvarPessoa(pessoa);
            }

            // Cria o morador e associa à pessoa existente ou recém-criada
            Morador morador = new Morador();
            morador.setMorador(true);
            morador.setMoradorVinculado(moradorDTO.getMoradorVinculado());
            morador.setExame(moradorDTO.getExame());
            morador.setPessoa(pessoa);

            moradorService.salvarMorador(morador);

            return ResponseEntity.ok("Novo funcionário adicionado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Morador: " + e.getMessage());
        }
    }

    @GetMapping("/consultar")
    public List<Morador> getMorador() {
       return moradorService.getMorador();
    }
}
