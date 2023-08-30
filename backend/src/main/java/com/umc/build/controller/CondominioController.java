package com.umc.build.controller;

import com.umc.build.model.Condominio;
import com.umc.build.serviceImpl.CondominioServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/condominio")
public class CondominioController {

    public CondominioServiceImpl condominioService;

    @PostMapping("salvar")
    public ResponseEntity<String> add(@RequestBody Condominio condominio) {
        try {
            condominioService.validateEmpresaCondominio(condominio);
            if (condominio.getEmpresa() == null) {
                throw new Exception("Empresa não encontrada");
            }
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
