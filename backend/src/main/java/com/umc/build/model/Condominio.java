package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Condominio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Boolean piscina;
    private Boolean churrasqueira;
    private Boolean salao;
    @OneToOne
    @JoinColumn(name = "predio_codigo")
    private Predio predio;


}
