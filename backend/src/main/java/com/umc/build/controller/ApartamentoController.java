package com.umc.build.controller;

import com.umc.build.model.Apartamento;
import com.umc.build.serviceImpl.ApartamentoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/apartamento")
public class ApartamentoController {

    @Autowired
    private ApartamentoServiceImpl apartamentoService;

    @PostMapping("/salvar")
    public ResponseEntity<String> salvar(@RequestBody Apartamento apartamento, @RequestParam("id") Integer predioId) {
        try {
            apartamentoService.validateApartamentoPredio(predioId);
            apartamentoService.salvarApartamento(apartamento);
            return ResponseEntity.ok("Novo apartamento adicionado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Condominio: " + e.getMessage());
        }
    }
    @GetMapping("getApartamento")
    public List<Apartamento> getApartamento() {
       return apartamentoService.getApartamento();
    }
}
