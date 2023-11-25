package com.umc.build.dto;

import com.umc.build.model.Apartamento;
import com.umc.build.model.Empresa;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MoradorDTO {

    private String nome;
    private Integer idade;
    private String cpf;
    private String rg;
    private String cep;
    private Boolean representante;
    private String email;
    private Boolean atribuido;
    private Boolean exame;
    private Boolean visitante;
    private Apartamento apartamento;
    private Empresa empresa;

    public Empresa getEmpresa() {
       return apartamento.getEmpresa();
    }
}
