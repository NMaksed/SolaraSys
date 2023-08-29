package com.umc.build.serviceImpl;

import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Morador;
import com.umc.build.repository.AbstractPessoaRepository;
import com.umc.build.repository.MoradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoradorServiceImpl{

    @Autowired
    private MoradorRepository moradorRepository;
    @Autowired
    private AbstractPessoaRepository pessoaRepository;
    @Autowired
    private AbstractPessoaServiceImpl pessoaService;

    public void salvarMorador(Morador morador) {
         moradorRepository.save(morador);
    }

    public List<Morador> getMorador() {
        return moradorRepository.findAll();
    }

    public void validadePessoaMorador(String cpf) { pessoaRepository.findByCpf(cpf); }

    public void builderPessoaMorador(Morador moradorDTO) {
        AbstractPessoa pessoa = new AbstractPessoa();
        pessoa = new AbstractPessoa();
        pessoa.setNome(moradorDTO.getPessoa().getNome());
        pessoa.setIdade(moradorDTO.getPessoa().getIdade());
        pessoa.setCep(moradorDTO.getPessoa().getCep());
        pessoa.setRg(moradorDTO.getPessoa().getRg());
        pessoa.setCpf(moradorDTO.getPessoa().getCpf());

        pessoa = pessoaService.salvarPessoa(moradorDTO.getPessoa());

        Morador morador = new Morador();
        morador.setMorador(true);
        morador.setMoradorVinculado(moradorDTO.getMoradorVinculado());
        morador.setExame(moradorDTO.getExame());
        morador.setPessoa(pessoa);
    }

}
