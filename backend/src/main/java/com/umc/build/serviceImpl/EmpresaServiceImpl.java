package com.umc.build.serviceImpl;

import com.umc.build.model.Empresa;
import com.umc.build.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpresaServiceImpl {
    @Autowired
    private EmpresaRepository empresaRepository;

    public Empresa salvarEmpresa(Empresa empresa) { return empresaRepository.save(empresa); }
    public List<Empresa> getEmpresa() { return empresaRepository.findAll(); }
    public Empresa validateEmpresa(String cnpj) { return empresaRepository.findByCnpj(cnpj); }
    public void builderEmpresa(Empresa empresaDTO) {
           Empresa empresa = new Empresa();
            empresa.setNome(empresaDTO.getNome());
            empresa.setCnpj(empresaDTO.getCnpj());
            empresa.setCidade(empresaDTO.getCidade());
            empresa.setRua(empresaDTO.getRua());
            empresa.setUf(empresaDTO.getUf());
            empresa.setNumero(empresaDTO.getNumero());
            empresa.setCep(empresaDTO.getCep());
            empresa.setEnderecoCompleto(empresa.getEnderecoCompleto());
        }
    }

