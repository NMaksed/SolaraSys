package com.umc.build.serviceImpl;

import com.umc.build.dto.FuncionarioDTO;
import com.umc.build.model.AbstractPessoa;
import com.umc.build.model.Condominio;
import com.umc.build.model.Empresa;
import com.umc.build.model.Funcionario;
import com.umc.build.repository.AbstractPessoaRepository;
import com.umc.build.repository.CondominioRepository;
import com.umc.build.repository.EmpresaRepository;
import com.umc.build.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FuncionarioServiceImpl {

    @Autowired
    private FuncionarioRepository funcionarioRepository;
    @Autowired
    private AbstractPessoaRepository pessoaRepository;
    @Autowired
    private AbstractPessoaServiceImpl pessoaService;
    @Autowired
    private EmpresaRepository empresaRepository;
    @Autowired
    private CondominioRepository condominioRepository;

    public void salvarFuncionario(Funcionario funcionario) {
        funcionarioRepository.save(funcionario);
    }

    public List<Funcionario> getFuncionario(Integer empresa) {
        return funcionarioRepository.findByEmpresa(empresa);
    }

    public void validatePessoaFuncionario(Integer id) throws Exception {
        Optional<AbstractPessoa> pessoaOptional = pessoaRepository.findById(id);

        if (pessoaOptional.isEmpty()) {
            throw new Exception("Pessoa: " + id + " não existe!");
        }
    }

    public void validateEmpresaFuncionario(Integer id) throws Exception{
        Optional<Empresa> empresaOptional = empresaRepository.findById(id);

        if (empresaOptional.isEmpty()) {
            throw new Exception("Empresa: " + id + " não existe!");
        }
    }

    public void validateCondominioFuncionario(Integer id) throws Exception{
        Optional<Condominio> condominioOptional = condominioRepository.findById(id);

        if (condominioOptional.isEmpty()) {
            throw new Exception("Condominio: " + id + " não existe!");
        }
    }


    public Integer numeroFuncionarios(Integer empresa) {
        return funcionarioRepository.numeroFuncionarios(empresa);
    }

    public String nomeCondominio(Integer empresa) {
        return funcionarioRepository.nomeCondominio(empresa);
    }


    public void builderPessoaFuncionario(FuncionarioDTO funcionarioDTO, Integer condminioId) {
        AbstractPessoa pessoa = new AbstractPessoa();
        pessoa.setNome(funcionarioDTO.getNome());
        pessoa.setIdade(funcionarioDTO.getIdade());
        pessoa.setCep(funcionarioDTO.getCep());
        pessoa.setRg(funcionarioDTO.getRg());
        pessoa.setCpf(funcionarioDTO.getCpf());


        Funcionario funcionario = new Funcionario();

        funcionario.setFuncao(funcionarioDTO.getFuncao());
        funcionario.setSalario(funcionarioDTO.getSalario());
        funcionario.setHoraEntrada(funcionarioDTO.getHoraEntrada());
        funcionario.setHoraSaida(funcionarioDTO.getHoraSaida());
        Condominio condominio = condominioRepository.idCondominio(condminioId);
        funcionario.setCondominio(condominio);
        funcionario.setEmpresa(condominio.getEmpresa());
        funcionario.setPessoa(pessoa);
        pessoaService.salvarPessoa(pessoa);
        salvarFuncionario(funcionario);
        getFuncionario(condominio.getEmpresa().getId());
    }

    public void deletar(Integer funcionario, Integer empresa) throws Exception{
        if (funcionario != null) {
            funcionarioRepository.deleteById(funcionario);
            funcionarioRepository.findByEmpresa(empresa);
        }
        else {
            throw new Exception("Funcionario não pode ser apagado!" );
        }
    }
}
