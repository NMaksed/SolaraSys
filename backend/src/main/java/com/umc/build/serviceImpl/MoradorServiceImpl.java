package com.umc.build.serviceImpl;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Morador;
import com.umc.build.repository.AbstractPessoaRepository;
import com.umc.build.repository.MoradorRepository;
import com.umc.build.service.MoradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoradorServiceImpl implements MoradorService {

    @Autowired
    private MoradorRepository moradorRepository;
    @Override
    public Morador salvarMorador(Morador morador) {
        return moradorRepository.save(morador);
    }
    @Override
    public List<Morador> getMorador() {
        return moradorRepository.findAll();
    }
}
