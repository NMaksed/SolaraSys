package com.umc.build.controller;

import com.umc.build.model.Empresa;
import com.umc.build.serviceImpl.EmpresaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {
    @Autowired
    private EmpresaServiceImpl empresaService;

    @PostMapping("/salvar")
    public ResponseEntity<String> salvarEmpresa(@RequestBody Empresa empresaDTO) {
        try {
            empresaService.salvarEmpresa(empresaDTO);
            return ResponseEntity.ok("Nova empresa adicionada!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Empresa: " + e.getMessage());
        }
    }
}
