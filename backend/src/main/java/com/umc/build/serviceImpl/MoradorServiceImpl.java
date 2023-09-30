package com.umc.build.serviceImpl;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Apartamento;
import com.umc.build.model.Morador;
import com.umc.build.repository.AbstractPessoaRepository;
import com.umc.build.repository.ApartamentoRepository;
import com.umc.build.repository.MoradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MoradorServiceImpl{

    @Autowired
    private MoradorRepository moradorRepository;
    @Autowired
    private AbstractPessoaRepository pessoaRepository;
    @Autowired
    private AbstractPessoaServiceImpl pessoaService;
    @Autowired
    private ApartamentoRepository apartamentoRepository;

    public void salvarMorador(Morador morador) {
         moradorRepository.save(morador);
    }

    public List<Morador> getMorador() {
        return moradorRepository.findAll();
    }

    public void validatePessoaMorador(Integer id) throws Exception {
        Optional<AbstractPessoa> pessoaOptional = pessoaRepository.findById(id);

        if (pessoaOptional.isEmpty()) {
            throw new Exception("Pessoa: " + id + " não existe!");
        }
    }
    public void validateApartamentoMorador(Integer id) throws Exception{
        Optional<Apartamento> apartamentoOptional = apartamentoRepository.findById(id);

        if (apartamentoOptional.isEmpty()) {
            throw new Exception("Apartamento: " + id + " não existe!");
        }
    }

    public void builderPessoaMorador(Morador moradorDTO) {
        AbstractPessoa pessoa = new AbstractPessoa();
        pessoa.setNome(moradorDTO.getPessoa().getNome());
        pessoa.setIdade(moradorDTO.getPessoa().getIdade());
        pessoa.setCep(moradorDTO.getPessoa().getCep());
        pessoa.setRg(moradorDTO.getPessoa().getRg());
        pessoa.setCpf(moradorDTO.getPessoa().getCpf());

        pessoa = pessoaService.salvarPessoa(moradorDTO.getPessoa());

        Morador morador = new Morador();
        morador.setRepresentante(moradorDTO.getRepresentante());
        morador.setAtribuido(moradorDTO.getAtribuido());
        morador.setExame(moradorDTO.getExame());
        morador.setPessoa(pessoa);
    }

}
