package com.umc.build.repository;

import com.umc.build.model.Condominio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;


@Repository
public interface CondominioRepository extends JpaRepository<Condominio, Integer> {
    public void findCondominioByDataRegistro(LocalDate dataRegistro);

    @Query(value = "SELECT * FROM condominio WHERE id = :id", nativeQuery = true)
    Condominio idCondominio(@Param("id") Integer id);
}
