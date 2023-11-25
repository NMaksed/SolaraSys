package com.umc.build.serviceImpl;

import com.umc.build.dto.CondominioDTO;
import com.umc.build.model.Condominio;
import com.umc.build.model.Empresa;
import com.umc.build.repository.CondominioRepository;
import com.umc.build.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CondominioServiceImpl{

    @Autowired
    public CondominioRepository condominioRepository;
    @Autowired
    public EmpresaRepository empresaRepository;

    public void salvarCondominio(Condominio condominio) {
        condominioRepository.save(condominio);
    }

    public List<Condominio> getCondominio(Integer empresa) {
        return condominioRepository.findByEmpresa(empresa);
    }
    public void validateEmpresaCondominiobyId(Integer id) throws Exception {
        Optional<Empresa> empresaOptional = empresaRepository.findById(id);

        if (empresaOptional.isEmpty()) {
            throw new Exception("Empresa: " + id + " não existe!");
        }
    }

    public void builderCondominio(CondominioDTO dto, Empresa empresa) {
        Condominio condominio = new Condominio();

        condominio.setEmpresa(empresa);
        condominio.setChurrasqueira(dto.getChurrasqueira());
        condominio.setPiscina(dto.getPiscina());
        condominio.setNome(dto.getNome());
        condominio.setSalao(dto.getSalao());
        condominio.setSalao(dto.getSalao());
        salvarCondominio(condominio);
    }

    public void deletarCondominio(Integer condominio) throws Exception{
        if (condominio != null) {
            condominioRepository.deleteById(condominio);
        }
        else {
            throw new Exception("Condominio não pode ser apagado!" );
        }
    }
}
