package com.umc.build.serviceImpl;

import com.umc.build.dto.MensagemDTO;
import com.umc.build.model.Conversa;
import com.umc.build.model.Mensagem;
import com.umc.build.model.Morador;
import com.umc.build.repository.MensagemRepository;
import com.umc.build.repository.MoradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MensagemServiceImpl {

    private final MensagemRepository mensagemRepository;
    @Autowired
    public MensagemServiceImpl(MensagemRepository mensagemRepository) {
        this.mensagemRepository = mensagemRepository;
    }
    @Autowired
    private ConversaServiceImpl conversaService;
    @Autowired
    private MoradorRepository moradorRepository;



        public Mensagem enviarMensagem(MensagemDTO mensagemDTO) {
            Morador sender = moradorRepository.findById(mensagemDTO.getSenderId()).orElseThrow();
            Morador recipient = moradorRepository.findById(mensagemDTO.getRecipientId()).orElseThrow();

            Conversa conversa = conversaService.checkConversa(sender, recipient);

            if (conversa == null) {
                // Nova conversa se não houver uma existente
                conversa = conversaService.createConversa(sender, recipient);
            }

        Mensagem mensagem = new Mensagem();
        mensagem.setConversa(conversa);
        mensagem.setConteudo(mensagemDTO.getConteudo());
        mensagem.setTimestamp(LocalDateTime.now());
        mensagem.setRecipientId(recipient);
        mensagem.setSenderId(sender);
        mensagemRepository.save(mensagem);

        return mensagem;
    }

}
