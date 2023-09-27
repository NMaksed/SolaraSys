package com.umc.build.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @ManyToOne
    @JoinColumn(name = "empresa_condominio_codigo")
    private Empresa empresa;
    @JsonIgnore
    @OneToMany(mappedBy = "condominio")
    private List<Funcionario> funcionarios;

    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }
}
