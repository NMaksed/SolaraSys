package com.umc.build.controller;
import com.umc.build.dto.MensagemDTO;
import com.umc.build.serviceImpl.ConversaServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conversa")
public class ConversaController {

    private final ConversaServiceImpl conversaService;
    @Autowired
    public ConversaController(ConversaServiceImpl conversaService){
        this.conversaService = conversaService;
    }


    @GetMapping("/{conversaId}/mensagens")
    public ResponseEntity<List<MensagemDTO>> getMensagens(@PathVariable Integer conversaId) {
        List<MensagemDTO> mensagens = conversaService.getMensagens(conversaId);

        return new ResponseEntity<>(mensagens, HttpStatus.OK);
    }

}
