package com.umc.build.controller;

import ch.qos.logback.core.rolling.helper.IntegerTokenConverter;
import com.umc.build.model.Predio;
import com.umc.build.serviceImpl.PredioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/predio")
public class PredioController {

    @Autowired
    private PredioServiceImpl predioService;

    @PostMapping("/salvar{id}")
    public ResponseEntity<String> salvarPredio(@RequestBody Predio predio, @RequestParam("id") Integer condominioId) {
        try {
            predioService.validatePredioCondominiobyId(condominioId);
            predioService.salvarPredio(predio);
            return ResponseEntity.ok("Novo Prédio adicionado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Prédio: " + e.getMessage());
        }
    }

    @GetMapping("/getPredio/{empresa}")
    public List<Predio> getPredio(@PathVariable Integer empresa) {
        return predioService.getPredio(empresa);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletarPredio(@PathVariable Integer id) {
        try {
            predioService.deletar(id);
            return ResponseEntity.ok("Predio Apagado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Empresa: " + e.getMessage());
        }
    }

    @GetMapping("/numeroPredio/{empresa}")
    public ResponseEntity<String> numeroPredio(@PathVariable Integer empresa) {
        try {
            Integer numero = predioService.numeroPredio(empresa);
            return ResponseEntity.ok(""+ numero);
        }  catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Empresa: " + e.getMessage());
        }
    }
}
