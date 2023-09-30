package com.umc.build.model;

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
    @OneToMany(mappedBy = "apartamento")
    private List<AbstractPessoa> visitante;
    @OneToMany(mappedBy = "apartamento")
    private List<Morador> morador;
    @JoinColumn(name = "empresa_apartamento_codigo")
    @ManyToOne
    private Empresa empresa;
    @JoinColumn(name = "predio_apartamento_codigo")
    @ManyToOne
    private Predio predio;
}
