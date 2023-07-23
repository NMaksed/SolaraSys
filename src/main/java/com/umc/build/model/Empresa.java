package com.umc.build.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Empresa {

    private String id;
    private String nome;
    private String enderecoCompleto;
    private Integer numero;
    private String cidade;
    private String rua;
    private String cnpj;

}
