package com.umc.build.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", timezone = "GMT-3")
    private LocalDate dataRegistro;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", timezone = "GMT-3")
    private String horaEntrada;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", timezone = "GMT-3")
    private String horaSaida;
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "pessoa_funcionario_codigo")
    private AbstractPessoa pessoa;
    @JsonIgnore
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
