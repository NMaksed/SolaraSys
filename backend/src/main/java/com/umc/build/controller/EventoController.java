package com.umc.build.controller;

import com.umc.build.model.Evento;
import com.umc.build.serviceImpl.EventoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/eventos")
public class EventoController {

    @Autowired
    private EventoServiceImpl eventoService;

    @PostMapping("/salvarEvento")
    public ResponseEntity<String> evento(@RequestBody Evento evento) {
        evento = eventoService.agendarEspaco(evento);
        return ResponseEntity.ok("Agendamento realizado com sucesso");
    }

    @GetMapping("/consultar/{empresa}")
    public List<Evento> getEvento(@PathVariable Integer empresa) {
        return eventoService.getEventos(empresa);
    }

}