package com.umc.build.repository;

import com.umc.build.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {

    @Query(value = "SELECT * FROM funcionario WHERE id = :id", nativeQuery = true)
    Funcionario idFuncionario(@Param("id") Integer id);
}
