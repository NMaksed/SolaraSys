package com.umc.build.controller;

import com.umc.build.model.Morador;
import com.umc.build.repository.MoradorRepository;
import com.umc.build.service.MoradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/morador")
public class MoradorController {

    @Autowired
    public MoradorService moradorService;

    @PostMapping("/salvar")
    public String add(@RequestBody Morador morador) {
        moradorService.salvarMorador(morador);
        return "Novo morador adicionado";
    }
    @GetMapping("/consultar")
    public List<Morador> getMorador() {
       return moradorService.getMorador();
    }
}
