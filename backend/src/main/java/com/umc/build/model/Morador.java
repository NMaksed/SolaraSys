package com.umc.build.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Morador extends AbstractPessoa{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_morador;
    private Boolean morador; //morador dono
    private Boolean moradorVinculado;
    private Boolean exame;
}
