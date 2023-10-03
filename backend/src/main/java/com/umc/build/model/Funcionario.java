package com.umc.build.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "funcionario")
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String funcao;
    private Double salario = 0d;
    private LocalDate dataRegistro;
    private String horaEntrada;
    private String horaSaida;
    @OneToOne
    @JoinColumn(name = "pessoa_funcionario_codigo")
    private AbstractPessoa pessoa;
    @OneToOne
    @JoinColumn(name = "usuario_funcionario_codigo")
    private User user = null;
    @ManyToOne
    @JoinColumn(name = "empresa_funcionario_codigo")
    private Empresa empresa;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "condominio_funcionario_codigo")
    private Condominio condominio;

    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }
}
