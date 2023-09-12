package com.umc.build.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "condominio")
public class Condominio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private LocalDate dataRegistro;
    private Boolean piscina;
    private Boolean churrasqueira;
    private Boolean salao;
    private String avisos;
    @OneToMany(mappedBy = "condominio")
    private List<Predio> predio;
    @ManyToOne
    @JoinColumn(name = "empresa_condominio_codigo")
    private Empresa empresa;
    @OneToMany(mappedBy = "condominio")
    private List<User> usuario;
    @OneToMany(mappedBy = "condominio")
    private List<Funcionario> funcionarios;
    @OneToMany(mappedBy = "condominio")
    private List<Apartamento> apartamento;

    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }
}
