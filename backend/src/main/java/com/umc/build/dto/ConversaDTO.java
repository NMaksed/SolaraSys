package com.umc.build.dto;

import java.util.List;

public class ConversaDTO {

    private Integer id;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }



    private List<MensagemDTO> mensagens;
    public List<MensagemDTO> getMensagens() {
        return mensagens;
    }
    public void setMensagens(List<MensagemDTO> mensagens) {
        this.mensagens = mensagens;
    }



}
