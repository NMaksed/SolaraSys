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
@CrossOrigin
@RequestMapping("/morador")
public class MoradorController {

    @Autowired
    public MoradorServiceImpl moradorService;
    @Autowired
    public AbstractPessoaServiceImpl pessoaService;

    @PostMapping("/salvar")
    public ResponseEntity<String> add(@RequestBody Morador moradorDTO, @RequestParam("id") Integer apartamentoId) {
        try {
            moradorService.validateApartamentoMorador(apartamentoId);
            moradorService.validatePessoaMorador(moradorDTO.getPessoa().getCpf());
            if (moradorDTO.getPessoa() == null) {
                moradorService.builderPessoaMorador(moradorDTO);
            }
            moradorService.salvarMorador(moradorDTO);
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
