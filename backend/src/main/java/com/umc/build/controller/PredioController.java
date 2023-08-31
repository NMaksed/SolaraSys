package com.umc.build.controller;

import com.umc.build.model.Predio;
import com.umc.build.serviceImpl.PredioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/predio")
public class PredioController {

    @Autowired
    private PredioServiceImpl predioService;

    public ResponseEntity<String> salvarPredio(@RequestBody Predio predio) {
        try {
            predioService.validatePredioCondominio(predio.getCondominio().getDataRegistro());
            if (predio.getCondominio() == null) {
                throw new Exception("Condomínio inexistente");
            }
            predioService.salvarPredio(predio);
            return ResponseEntity.ok("Novo Prédio adicionado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Prédio: " + e.getMessage());
        }
    }
}
