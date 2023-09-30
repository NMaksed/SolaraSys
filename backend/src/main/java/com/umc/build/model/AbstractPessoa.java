package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
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
    @OneToOne(mappedBy = "pessoa")
    private Funcionario funcionario;
    @OneToOne(mappedBy = "pessoa")
    private Morador morador;
    @JoinColumn(name = "empresa_visitante_codigo")
    @ManyToOne
    private Empresa empresa;
}
