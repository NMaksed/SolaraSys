package com.umc.build.controller;

import com.umc.build.model.Condominio;
import com.umc.build.service.CondominioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/condominio")
public class CondominioController {

    public CondominioService condominioService;

    @PostMapping("salvarCondominio")
    public String add(@RequestBody Condominio condominio) {
        condominioService.salvarCondominio(condominio);
        return "Novo Condomínio adicionar";
    }

    @GetMapping("getCondominio")
    public List<Condominio> getAllCondominio() {
        return condominioService.getCondominio();
    }
}
