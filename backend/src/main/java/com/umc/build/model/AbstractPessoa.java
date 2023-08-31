package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "pessoa")
public class AbstractPessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private Integer idade;
    private String cpf;
    private String rg;
    private String cep;
    @ManyToOne
    @JoinColumn(name = "visitante_apartamento_codigo")
    private Apartamento apartamento;
}
