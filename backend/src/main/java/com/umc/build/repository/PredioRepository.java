package com.umc.build.repository;

import com.umc.build.model.Predio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface PredioRepository extends JpaRepository<Predio, Integer> {

    public void findPredioByDataRegistro(LocalDate dataRegistro);

    @Query(value = "SELECT count(*) FROM predio where empresa_predio_codigo = :empresa", nativeQuery = true)
    Integer numeroPredios(@Param("empresa") Integer empresa);
}
