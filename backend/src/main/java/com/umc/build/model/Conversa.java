package com.umc.build.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "conversa")
public class Conversa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "morador1ID")
    private Morador morador1ID;

    @ManyToOne
    @JoinColumn(name = "morador2ID")
    private Morador morador2ID;

    @OneToMany(mappedBy = "conversa", cascade = CascadeType.ALL)
    private List<Mensagem> mensagens;


    // Getters e Setters...

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Morador getMorador1ID() {
        return morador1ID;
    }

    public void setMorador1ID(Morador morador1ID) {
        this.morador1ID = morador1ID;
    }

    public Morador getMorador2ID() {
        return morador2ID;
    }

    public void setMorador2ID(Morador morador2ID) {
        this.morador2ID = morador2ID;
    }

    public List<Mensagem> getMensagens() {
        return mensagens;
    }

    @JsonIgnore
    public void setMensagens(List<Mensagem> mensagens ) {
        this.mensagens = mensagens;
    }

    public static Conversa criarConversa(Morador morador1, Morador morador2) {
        Conversa conversa = new Conversa();
        conversa.setMorador1ID(morador1);
        conversa.setMorador2ID(morador2);
        return conversa;
    }

}
