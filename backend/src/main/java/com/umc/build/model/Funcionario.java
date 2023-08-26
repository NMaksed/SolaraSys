package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "funcionario")
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String funcao;
    private Double salario = 0d;
    @OneToOne
    @JoinColumn(name = "pessoa_funcionario_codigo")
    private AbstractPessoa pessoa;
    @OneToOne
    @JoinColumn(name = "usuario_funcionario_codigo")
    private User user;
}
