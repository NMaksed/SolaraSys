package com.umc.build.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "mensagem")
public class Mensagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conversaID")
    private Conversa conversa;

    private String conteudo;

    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "senderId")
    private Morador senderId;

    @ManyToOne
    @JoinColumn(name = "recipientId")
    private Morador recipientId;

    // Getters e Setters...

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Conversa getConversa() {
        return conversa;
    }

    public void setConversa(Conversa conversa) {
        this.conversa = conversa;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public Morador getSender() {
        return senderId;
    }

    public void setSenderId(Morador senderId) {
        this.senderId = senderId;
    }

    public Morador getRecipientId() {
        return recipientId;
    }

    public void setRecipientId(Morador recipientId) {
        this.recipientId = recipientId;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public static Mensagem criarMensagem(Conversa conversa, String conteudo, Morador sender, Morador recipient){
        Mensagem mensagem = new Mensagem();
        mensagem.setConversa(conversa);
        mensagem.setConteudo(conteudo);
        mensagem.setSenderId(sender);
        mensagem.setRecipientId(recipient);
        return mensagem;
    }

}
