package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "usuario")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;
    private String email;
    private String senha;
    @OneToOne(mappedBy = "user")
    private Funcionario funcionario;
    @ManyToOne
    @JoinColumn(name = "usuario")
    private Empresa empresa;
}
