package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "predio")
public class Predio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer numero;
    private Integer andar;
    private Integer numeroApartamento;
    private String referencia;
    private LocalDate dataRegistro;
    @OneToMany(mappedBy = "predio")
    private List<Morador> morador;
    @ManyToOne
    @JoinColumn(name = "condominio_predio_codigo")
    private Condominio condominio;
    @OneToMany(mappedBy = "predio")
    private List<Apartamento> apartamento;

    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }

}
