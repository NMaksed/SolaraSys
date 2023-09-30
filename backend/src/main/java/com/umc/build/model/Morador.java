package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "morador")
public class Morador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Boolean representante;
    private Boolean atribuido;
    private Boolean exame;
    private LocalDate dataRegistro;
    @OneToOne
    @JoinColumn(name = "pessoa_morador_codigo")
    private AbstractPessoa pessoa;
    @ManyToOne
    @JoinColumn(name = "apartamento_morador_codigo")
    private Apartamento apartamento;
    @JoinColumn(name = "empresa_morador_codigo")
    @ManyToOne
    private Empresa empresa;
    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }
}
