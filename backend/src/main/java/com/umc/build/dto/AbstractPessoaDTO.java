package com.umc.build.dto;

import com.umc.build.model.Apartamento;
import com.umc.build.model.Condominio;
import com.umc.build.model.Empresa;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AbstractPessoaDTO {

    private String nome;
    private Integer idade;
    private String cpf;
    private String rg;
    private String cep;
    private Condominio condominio;
    private Empresa empresa;
    private Apartamento apartamento;

}
