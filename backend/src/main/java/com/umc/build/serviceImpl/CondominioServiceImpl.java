package com.umc.build.serviceImpl;

import com.umc.build.model.Condominio;
import com.umc.build.repository.CondominioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CondominioServiceImpl{

    @Autowired
    public CondominioRepository condominioRepository;

    public Condominio salvarCondominio(Condominio condominio) {return condominioRepository.save(condominio);}

    public List<Condominio> getCondominio() { return condominioRepository.findAll(); }
}
