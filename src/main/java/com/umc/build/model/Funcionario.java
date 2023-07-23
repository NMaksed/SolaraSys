package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Funcionario extends AbstractPessoa{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String funcao;
    private Double salario;
    @ManyToOne
    @JoinColumn(name = "pessoa_codigo")
    private AbstractPessoa pessoa;
}
