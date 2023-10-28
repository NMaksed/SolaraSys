package com.umc.build.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CondominioDTO {
    private String nome;
    private Boolean piscina;
    private Boolean churrasqueira;
    private Boolean salao;
    private String avisos;
}
