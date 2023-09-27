package com.umc.build.dto;

import com.umc.build.model.Condominio;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FuncionarioDTO {

    private String nome;
    private Integer idade;
    private String cpf;
    private String rg;
    private String cep;
    private Condominio condominio;
}
