package com.umc.build.controller;

import com.umc.build.model.Condominio;
import com.umc.build.serviceImpl.CondominioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/condominio")
public class CondominioController {
    @Autowired
    public CondominioServiceImpl condominioService;

    @PostMapping("/salvar{id}")
    public ResponseEntity<String> add(@RequestBody Condominio condominio, @RequestParam("id") Integer empresaId) {
        try {
            condominioService.validateEmpresaCondominiobyId(empresaId);
            condominioService.salvarCondominio(condominio);
            return ResponseEntity.ok("Novo condomínio adicionado!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Condominio: " + e.getMessage());
        }
    }

    @GetMapping("getCondominio")
    public List<Condominio> getAllCondominio() {
        return condominioService.getCondominio();
    }
}
