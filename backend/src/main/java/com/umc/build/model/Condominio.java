package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Condominio extends Predio{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Boolean piscina;
    private Boolean churrasqueira;
    private Boolean salao;
}
