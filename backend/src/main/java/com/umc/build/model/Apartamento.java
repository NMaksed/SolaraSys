package com.umc.build.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "apartamento")
public class Apartamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer numero;
    @JsonManagedReference
    @OneToMany(mappedBy = "apartamento")
    private List<Morador> morador;
    @JsonBackReference
    @JoinColumn(name = "empresa_apartamento_codigo")
    @ManyToOne
    private Empresa empresa;
    @JsonBackReference
    @JoinColumn(name = "predio_apartamento_codigo")
    @ManyToOne
    private Predio predio;
}
