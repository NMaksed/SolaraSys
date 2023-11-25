package com.umc.build.repository;

import com.umc.build.model.Evento;
import com.umc.build.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {

    @Query(value = "SELECT * FROM funcionario WHERE id = :id", nativeQuery = true)
    Funcionario idFuncionario(@Param("id") Integer id);

    @Query(value = "SELECT count(*) FROM funcionario where empresa_funcionario_codigo = :empresa", nativeQuery = true)
    Integer numeroFuncionarios(@Param("empresa") Integer empresa);

    @Query(value = "SELECT c.nome FROM condominio c LEFT JOIN funcionario f on f.condominio_funcionario_codigo = c.id WHERE f.empresa_funcionario_codigo = :empresa", nativeQuery = true)
    String nomeCondominio(@Param("empresa") Integer empresa);

    @Query(value = "SELECT * FROM funcionario WHERE empresa_funcionario_codigo = :empresa", nativeQuery = true)
    List<Funcionario> findByEmpresa(@Param("empresa") Integer empresa);
}
