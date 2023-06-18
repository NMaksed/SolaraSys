package com.umc.build.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Predio {

    private Integer predio_id;
    private Integer morador_id;
    private Integer apartamento_num;
    private String morador_nome;

}
