package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "empresa")
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String nome;
    private String enderecoCompleto;
    private Integer numero;
    private String cidade;
    private String rua;
    private String cnpj;
    @OneToMany(mappedBy = "empresa")
    private List<Condominio> condominio;
    @OneToMany(mappedBy = "empresa")
    private List<User> user;

}
