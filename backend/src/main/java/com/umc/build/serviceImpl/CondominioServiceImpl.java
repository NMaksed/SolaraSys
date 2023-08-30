package com.umc.build.serviceImpl;

import com.umc.build.model.Condominio;
import com.umc.build.model.Empresa;
import com.umc.build.repository.CondominioRepository;
import com.umc.build.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CondominioServiceImpl{

    @Autowired
    public CondominioRepository condominioRepository;
    @Autowired
    public EmpresaRepository empresaRepository;

    public void salvarCondominio(Condominio condominio) {
        condominioRepository.save(condominio);
    }

    public List<Condominio> getCondominio() { return condominioRepository.findAll(); }
    public void validateEmpresaCondominio(Condominio condominioDTO) {
        empresaRepository.findByCnpj(condominioDTO.getEmpresa().getCnpj());
    }
}
