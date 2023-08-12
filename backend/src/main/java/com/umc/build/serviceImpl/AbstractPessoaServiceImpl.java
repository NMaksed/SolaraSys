package com.umc.build.serviceImpl;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.repository.AbstractPessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbstractPessoaServiceImpl {

    @Autowired
    private AbstractPessoaRepository repository;
    @Autowired
    private MoradorServiceImpl moradorService;

    public AbstractPessoa salvarPessoa(AbstractPessoa pessoa) { return repository.save(pessoa); }

    public List<AbstractPessoa> getPessoa() { return repository.findAll(); }

    public AbstractPessoa buscarPorCpf(String cpf) {
        return repository.findByCpf(cpf);
    }
}
