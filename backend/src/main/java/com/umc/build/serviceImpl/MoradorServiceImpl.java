package com.umc.build.serviceImpl;

import com.umc.build.model.Morador;
import com.umc.build.repository.MoradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoradorServiceImpl{

    @Autowired
    private MoradorRepository moradorRepository;

    public Morador salvarMorador(Morador morador) {
        return moradorRepository.save(morador);
    }

    public List<Morador> getMorador() {
        return moradorRepository.findAll();
    }
}
