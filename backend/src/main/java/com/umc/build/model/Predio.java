package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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
    @OneToMany(mappedBy = "predio")
    private List<Morador> morador;
    @ManyToOne
    @JoinColumn(name = "condominio_predio_codigo")
    private Condominio condominio;


}
