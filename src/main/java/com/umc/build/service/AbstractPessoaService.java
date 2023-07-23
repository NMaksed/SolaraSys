package com.umc.build.service;

import com.umc.build.model.AbstractPessoa;

import java.util.List;

public interface AbstractPessoaService {

    public AbstractPessoa salvarPessoa(AbstractPessoa pessoa);
    public List<AbstractPessoa> getPessoa();

}
