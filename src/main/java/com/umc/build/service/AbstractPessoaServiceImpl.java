package com.umc.build.service;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.repository.AbstractPessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbstractPessoaServiceImpl implements AbstractPessoaService {

    @Autowired
    private AbstractPessoaRepository repository;
    @Override
    public AbstractPessoa salvarPessoa(AbstractPessoa pessoa) {return repository.save(pessoa); }
    @Override
    public List<AbstractPessoa> getPessoa() {return repository.findAll(); }

}
