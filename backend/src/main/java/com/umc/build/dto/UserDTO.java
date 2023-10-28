package com.umc.build.dto;

import com.umc.build.model.Condominio;
import com.umc.build.model.Empresa;
import com.umc.build.model.Funcionario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private String email;
    private String senha;
    private boolean administrador;
    private Funcionario funcionario;
    private Empresa empresa;
}
