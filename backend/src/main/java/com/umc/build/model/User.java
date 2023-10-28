package com.umc.build.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "usuario")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String email;
    private String senha;
    private boolean administrador = false;
    private LocalDate dataRegistro;
    @OneToOne
    @JoinColumn(name = "funcionario_usuario_codigo")
    private Funcionario funcionario;
    @JoinColumn(name = "empresa_usuario_codigo")
    @ManyToOne
    private Empresa empresa;
    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }
}
