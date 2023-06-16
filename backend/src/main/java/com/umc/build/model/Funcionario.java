package com.umc.build.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Funcionario extends AbstractPessoa{

    private Integer funcionario_id;
    private String funcao;

}
