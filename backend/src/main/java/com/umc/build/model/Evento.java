package com.umc.build.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "evento")
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String emailmorador;
    private String evento;
    private String espaco;
    private String date;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", timezone = "GMT-3")
    private LocalDate dataRegistro;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "evento_empresa_codigo")
    private Empresa empresa;
    @JsonBackReference
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "evento_condominio_codigo")
    private Condominio condominio;

    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }
}
