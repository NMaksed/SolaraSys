package com.umc.build.serviceImpl;

import com.umc.build.dto.MensagemDTO;
import com.umc.build.model.Conversa;
import com.umc.build.model.Mensagem;
import com.umc.build.model.Morador;
import com.umc.build.repository.ConversaRepository;
import com.umc.build.repository.MensagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConversaServiceImpl {

    private final ConversaRepository conversaRepository;
    @Autowired
    public ConversaServiceImpl(ConversaRepository conversaRepository){
        this.conversaRepository = conversaRepository;
    }

    @Autowired
    private MensagemRepository mensagemRepository;


    public Conversa createConversa(Morador morador1, Morador morador2) {
        Conversa conversa = new Conversa();
        conversa.setMorador1ID(morador1);
        conversa.setMorador2ID(morador2);
        return conversaRepository.save(conversa);
    }

    public Conversa checkConversa(Morador morador1, Morador morador2) {
        Conversa conversa = conversaRepository.findByMorador1IDAndMorador2ID(morador1, morador2);

        if (conversa == null) {
            conversa = conversaRepository.findByMorador1IDAndMorador2ID(morador2, morador1);
        }

        return conversa;
    }


    public List<MensagemDTO> getMensagens(Integer conversaId) {
        Conversa conversa = conversaRepository.findById(conversaId).orElse(null);

        List<Mensagem> mensagens = conversa.getMensagens();
        return mensagens.stream().map(this::toDTO).collect(Collectors.toList());

    }

    public MensagemDTO toDTO(Mensagem mensagem){
        MensagemDTO mensagemDTO = new MensagemDTO();
        mensagemDTO.setSenderId(mensagem.getSenderId().getId());
        mensagemDTO.setRecipientId(mensagem.getRecipientId().getId());
        mensagemDTO.setConteudo(mensagem.getConteudo());

        return mensagemDTO;

    }


}
