package com.umc.build.repository;

import com.umc.build.model.AbstractPessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AbstractPessoaRepository extends JpaRepository<AbstractPessoa, Integer> {
     public AbstractPessoa findByCpf(String cpf);
}
