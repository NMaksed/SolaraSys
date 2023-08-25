package com.umc.build.model;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Condominio {

    private Integer id;
    private Boolean piscina;
    private Boolean churrasqueira;
    private Boolean salao;
    @OneToMany
    @JoinColumn(name = "predio_codigo")
    private Predio predio;


}
