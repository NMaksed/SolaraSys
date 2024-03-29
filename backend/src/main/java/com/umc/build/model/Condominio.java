package com.umc.build.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jdk.jfr.Event;
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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", timezone = "GMT-3")
    private LocalDate dataRegistro;
    private Boolean piscina;
    private Boolean churrasqueira;
    private Boolean salao;
    @JsonIgnore
    private String avisos;
    @JsonBackReference
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "empresa_condominio_codigo")
    private Empresa empresa;
    @JsonIgnore
    @JsonManagedReference
    @OneToMany(mappedBy = "condominio")
    private List<Predio> predios;
    @JsonIgnore
    @OneToMany(mappedBy = "condominio")
    private List<Funcionario> funcionarios;
    @JsonManagedReference
    @JsonIgnore
    @OneToMany(mappedBy = "condominio")
    private List<Evento> eventos;

    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }
}
