package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "morador")
public class Morador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Boolean morador; //morador dono
    private Boolean moradorVinculado;
    private Boolean exame;
    @ManyToOne
    @JoinColumn(name = "pessoa_codigo")
    private AbstractPessoa pessoa;
}
