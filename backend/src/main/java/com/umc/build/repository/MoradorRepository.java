package com.umc.build.repository;

import com.umc.build.model.Morador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MoradorRepository extends JpaRepository<Morador, Integer> {


    @Query(value = "SELECT count(*) FROM morador where empresa_morador_codigo = :empresa", nativeQuery = true)
    Integer numeroMoradores(@Param("empresa") Integer empresa);

    @Query(value = "SELECT * FROM morador WHERE empresa_morador_codigo = :empresa", nativeQuery = true)
    List<Morador> findByEmpresa(@Param("empresa") Integer empresa);
}
