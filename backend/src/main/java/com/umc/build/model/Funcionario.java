package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

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
    private LocalDate dataRegistro;
    private LocalDateTime horaEntrada;
    private LocalDateTime horaSaida;
    @OneToOne
    @JoinColumn(name = "pessoa_funcionario_codigo")
    private AbstractPessoa pessoa;
    @OneToOne
    @JoinColumn(name = "usuario_funcionario_codigo")
    private User user;

    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }
}
