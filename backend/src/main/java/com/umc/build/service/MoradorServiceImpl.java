package com.umc.build.service;

import com.umc.build.model.Morador;
import com.umc.build.repository.MoradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoradorServiceImpl implements MoradorService{

    @Autowired
    private MoradorRepository moradorRepository;
    @Override
    public Morador salvarMorador(Morador morador) {
        return moradorRepository.save(morador);
    }
    @Override
    public List<Morador> getMorador() {
        return MoradorRepository.findAll();
    }
}
