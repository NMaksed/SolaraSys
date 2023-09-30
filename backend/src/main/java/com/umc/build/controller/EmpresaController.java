package com.umc.build.controller;

import com.umc.build.model.Empresa;
import com.umc.build.serviceImpl.EmpresaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/empresa")
public class EmpresaController {

    @Autowired
    private EmpresaServiceImpl empresaService;

    @PostMapping("/salvar{id}")
    public ResponseEntity<String> salvarEmpresa(@RequestBody Empresa empresaDTO) {
        try {
            empresaService.validateEmpresa(empresaDTO.getCnpj());
            empresaService.salvarEmpresa(empresaDTO);
            return ResponseEntity.ok("Nova empresa adicionada!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao criar Empresa: " + e.getMessage());
        }
    }
    @GetMapping("/getEmpresa")
    public List<Empresa> getEmpresa() {
        return empresaService.getEmpresa();
    }
}
