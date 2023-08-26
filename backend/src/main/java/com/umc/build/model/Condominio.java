package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "condominio")
public class Condominio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Boolean piscina;
    private Boolean churrasqueira;
    private Boolean salao;
    private String avisos;
    @OneToMany(mappedBy = "condominio")
    private List<Predio> predio;
    @ManyToOne
    @JoinColumn(name = "empresa_condominio_codigo")
    private Empresa empresa;

}
