package com.umc.build.controller;

import com.umc.build.dto.MensagemDTO;
import com.umc.build.model.Mensagem;
import com.umc.build.serviceImpl.ConversaServiceImpl;
import com.umc.build.serviceImpl.MensagemServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(name = "/mensagem")
public class MensagemController {

    @Autowired
    private MensagemServiceImpl mensagemServiceImpl;
    @Autowired
    private ConversaServiceImpl conversaServiceImpl;

    @PostMapping("/enviarMensagem")
    public ResponseEntity<String> enviarMensagem(@RequestBody MensagemDTO mensagemDTO){

        try {
            Mensagem mensagem = mensagemServiceImpl.enviarMensagem(mensagemDTO);
            return ResponseEntity.ok("Mensagem enviada com sucesso");
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao enviar mensagem");
        }

    }



}
