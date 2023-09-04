package com.umc.build.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
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
    @Transient
    @Getter(AccessLevel.NONE)
    private String enderecoCompleto;
    private Integer numero;
    private String cidade;
    private String rua;
    private String cnpj;
    private String cep;
    private String uf;
    private LocalDate dataRegistro;
    @OneToMany(mappedBy = "empresa")
    private List<Condominio> condominio;
    @OneToMany(mappedBy = "empresa")
    private List<User> user;
    @OneToMany(mappedBy = "empresa")
    private List<Apartamento> apartamentos;
    @OneToMany(mappedBy = "empresa")
    private List<Predio> predio;
    @OneToMany(mappedBy = "empresa")
    private List<Funcionario> funcionario;
    @OneToMany(mappedBy = "empresa")
    private List<Morador> morador;

    public String getEnderecoCompleto() {
        if (getRua() != null && getNumero() != null && getCidade() != null &&
            getUf() != null && getCep() != null) {
            StringBuilder stb = new StringBuilder();
            stb.append(getRua()).append(",").append(getNumero()).append(" - ")
                    .append(getCidade()).append(",").append(getUf()).append(" - ").append(getCep());
            return enderecoCompleto = String.valueOf(stb);
        }
        return null;
    }
    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }

}
