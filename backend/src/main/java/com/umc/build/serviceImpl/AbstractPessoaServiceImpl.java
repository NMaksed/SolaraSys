package com.umc.build.serviceImpl;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Apartamento;
import com.umc.build.repository.AbstractPessoaRepository;
import com.umc.build.repository.ApartamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AbstractPessoaServiceImpl {

    @Autowired
    private AbstractPessoaRepository repository;
    @Autowired
    private ApartamentoRepository apartamentoRepository;


    public AbstractPessoa salvarPessoa(AbstractPessoa pessoa) {
        return repository.save(pessoa);
    }

    public List<AbstractPessoa> getPessoa() { return repository.findAll(); }

    public void validateVisistanteApartamento(Integer id) throws Exception{
        Optional<Apartamento> apartamentoOptional = apartamentoRepository.findById(id);

        if (apartamentoOptional.isEmpty()) {
            throw new Exception("Apartamento: " + id + " não existe!");
        }
    }

    public AbstractPessoa buscarPorCpf(String cpf) {
        return repository.findByCpf(cpf);
    }
}
