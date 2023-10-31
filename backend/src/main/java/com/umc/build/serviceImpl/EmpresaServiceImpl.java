package com.umc.build.serviceImpl;

import com.umc.build.model.Empresa;
import com.umc.build.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpresaServiceImpl {
    @Autowired
    private EmpresaRepository empresaRepository;

    public void salvarEmpresa(Empresa empresa) {
        empresaRepository.save(empresa);
    }

    public List<Empresa> getEmpresa() {
        return empresaRepository.findAll();
    }

    public void validateEmpresa(String cnpj) throws Exception {
        Optional<Empresa> empresaOptional = empresaRepository.findByCnpj(cnpj);

        if (empresaOptional.isPresent()) {
            throw new Exception("Empresa: " + cnpj + " já cadastrada!");
        }
    }

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

        public Empresa findEmpresa(Integer empresaId) {
            return empresaRepository.trazPorid(empresaId);
        }

        public void deletarEmpresa(Integer empresa) throws Exception{
            if (empresa != null) {
                empresaRepository.deleteById(empresa);
            }
            else {
                throw new Exception("Empresa não pode ser apagada " );
            }
        }
}

