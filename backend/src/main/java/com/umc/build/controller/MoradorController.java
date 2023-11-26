package com.umc.build.controller;

import com.umc.build.dto.MoradorDTO;
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

    @PostMapping("/salvar/{id}")
    public ResponseEntity<String> add(@RequestBody MoradorDTO moradorDTO, @PathVariable("id") Integer apartamentoId) {
        try {
            moradorService.validateApartamentoMorador(apartamentoId);
            moradorService.builderPessoaMorador(moradorDTO, apartamentoId);
            return ResponseEntity.ok("Novo morador adicionado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Morador: " + e.getMessage());
        }
    }

    @GetMapping("/consultar/{empresa}")
    public List<Morador> getMorador(@PathVariable Integer empresa) {
       return moradorService.getMorador(empresa);
    }


    @DeleteMapping("/delete/{id}/{empresa}")
    public ResponseEntity<String> deletarMorador(@PathVariable Integer id, @PathVariable Integer empresa) {
        try {
            moradorService.deletar(id, empresa);
            return ResponseEntity.ok("Morador Apagado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao deletar Morador: " + e.getMessage());
        }
    }
}
