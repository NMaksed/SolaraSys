package com.umc.build.repository;

import com.umc.build.model.Evento;
import com.umc.build.model.Morador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Integer> {
    @Query(value = "SELECT * FROM evento WHERE evento_empresa_codigo = :empresa", nativeQuery = true)
    List<Evento> findByEmpresa(@Param("empresa") Integer empresa);
}