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
    @JoinColumn(name = "apartamento_visitante_codigo")
    private Apartamento apartamento;
    @ManyToOne
    @JoinColumn(name = "condominio_pessoa_codigo")
    private Condominio condominio;
    @ManyToOne
    @JoinColumn(name = "empresa_pessoa_codigo")
    private Empresa empresa;
}
