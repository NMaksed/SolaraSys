package com.umc.build.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jdk.jfr.Event;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "empresa")
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", timezone = "GMT-3")
    private LocalDate dataRegistro;
    @JsonIgnore
    @OneToMany(mappedBy = "empresa")
    private List<Condominio> condominio;
    @JsonIgnore
    @OneToMany(mappedBy = "empresa")
    private List<Funcionario> funcionario;
    @JsonIgnore
    @OneToMany(mappedBy = "empresa")
    private List<Predio> predio;
    @JsonIgnore
    @OneToMany(mappedBy = "empresa")
    private List<Morador> morador;
    @JsonIgnore
    @OneToMany(mappedBy = "empresa")
    private List<User> usuario;
    @JsonIgnore
    @OneToMany(mappedBy = "empresa")
    private List<Apartamento> apartamento;
    @JsonIgnore
    @OneToMany(mappedBy = "empresa")
    private List<Evento> eventos;

    public String getEnderecoCompleto() {
        if (getRua() != null && getNumero() != null && getCidade() != null &&
            getUf() != null && getCep() != null) {
            StringBuilder stb = new StringBuilder();
            stb.append(getRua()).append(", ").append(getNumero()).append(" - ")
                    .append(getCidade()).append(", ").append(getUf()).append(" - ").append(getCep());
            return enderecoCompleto = String.valueOf(stb);
        }
        return null;
    }
    @PrePersist
    public void setDataRegistro() {
        this.dataRegistro = LocalDate.now();
    }

}
