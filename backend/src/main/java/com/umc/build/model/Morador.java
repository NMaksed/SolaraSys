package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "morador")
public class Morador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Boolean morador; //morador dono
    private Boolean moradorVinculado;
    private Boolean exame;
    @OneToOne
    @JoinColumn(name = "pessoa_morador_codigo")
    private AbstractPessoa pessoa;
    @ManyToOne
    @JoinColumn(name = "predio_morador_codigo")
    private Predio predio;
}
