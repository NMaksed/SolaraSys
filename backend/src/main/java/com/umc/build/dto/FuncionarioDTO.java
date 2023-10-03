package com.umc.build.dto;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Condominio;
import com.umc.build.model.Empresa;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

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
    private String funcao;
    private Double salario;
    private String horaEntrada;
    private String horaSaida;
    private Condominio condominio;
    private Empresa empresa;

    public Empresa getEmpresa() {
        return condominio.getEmpresa();
    }
}
