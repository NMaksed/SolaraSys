package com.umc.build.serviceImpl;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.repository.AbstractPessoaRepository;
import com.umc.build.service.AbstractPessoaService;
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
    @Override
    public AbstractPessoa buscarPorCpf(String cpf) {
        return repository.findByCpf(cpf);
    }
}
