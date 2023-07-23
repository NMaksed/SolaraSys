package com.umc.build.service;

import com.umc.build.model.Condominio;
import com.umc.build.repository.CondominioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CondominioServiceImpl implements CondominioService{

    @Autowired
    public CondominioRepository condominioRepository;
    @Override
    public Condominio salvarCondominio(Condominio condominio) {return condominioRepository.save(condominio);}
    @Override
    public List<Condominio> getCondominio() { return condominioRepository.findAll(); }
}
