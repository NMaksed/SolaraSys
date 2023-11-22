package com.umc.build.mapping;

import com.umc.build.dto.ConversaDTO;
import com.umc.build.model.Conversa;

import java.util.stream.Collectors;

public class ConversaConverter {

    public static ConversaDTO toDTO(Conversa conversa) {

        ConversaDTO conversaDTO = new ConversaDTO();
        conversaDTO.setId(conversa.getId());
        conversaDTO.setMensagens(conversa.getMensagens().stream().map(MensagemConverter::toDTO).collect(Collectors.toList()));

        return conversaDTO;

    }


    public static Conversa toEntity(ConversaDTO conversaDTO){
        Conversa conversa = new Conversa();
        conversa.setId(conversaDTO.getId());
        conversa.setMensagens(conversaDTO.getMensagens().stream().map(MensagemConverter::toEntity).collect(Collectors.toList()));

        return conversa;

    }


}
