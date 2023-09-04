package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
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
    private LocalDate dataRegistro;
    @OneToOne(mappedBy = "user")
    private Funcionario funcionario;
    @ManyToOne
    @JoinColumn(name = "empresa_usuario_codigo")
    private Empresa empresa;
    @ManyToOne
    @JoinColumn(name = "condominio_usuario_codigo")
    private Condominio condominio;

    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }
}
