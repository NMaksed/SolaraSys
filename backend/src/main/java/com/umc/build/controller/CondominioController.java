package com.umc.build.controller;

import com.umc.build.model.Condominio;
import com.umc.build.serviceImpl.CondominioServiceImpl;
import com.umc.build.serviceImpl.TokenServiceImpl;
import io.jsonwebtoken.Claims;
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
    private CondominioServiceImpl condominioService;

    @Autowired
    private TokenServiceImpl tokenService;

    @PostMapping("/salvar{id}")
    public ResponseEntity<String> add(@RequestBody Condominio condominio, @RequestParam("id") Integer empresaId,
                                      @RequestHeader(value = "Authorization") String authorizationHeader) {
        try {
            if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                String jwtToken = authorizationHeader.substring(7); // Remove o prefixo "Bearer "
                Claims claims = tokenService.parseToken(jwtToken);

            }
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
