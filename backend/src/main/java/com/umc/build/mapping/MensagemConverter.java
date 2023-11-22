package com.umc.build.mapping;

import com.umc.build.dto.MensagemDTO;
import com.umc.build.model.Mensagem;
import com.umc.build.model.Morador;

public class MensagemConverter {


    public static MensagemDTO toDTO(Mensagem mensagem) {
        MensagemDTO mensagemDTO = new MensagemDTO();
        mensagemDTO.setSenderId(mensagem.getSenderId().getId());
        mensagemDTO.setRecipientId(mensagem.getRecipientId().getId());
        mensagemDTO.setConteudo(mensagem.getConteudo());

        return mensagemDTO;

    }


    public static Mensagem toEntity(MensagemDTO mensagemDTO){

        Mensagem mensagem = new Mensagem();
        Morador sender = new Morador();
        sender.setId(mensagemDTO.getSenderId());

        Morador recipient = new Morador();
        recipient.setId(mensagemDTO.getRecipientId());

        mensagem.setSenderId(sender);
        mensagem.setRecipientId(recipient);
        mensagem.setConteudo(mensagemDTO.getConteudo());

        return mensagem;

    }


}
