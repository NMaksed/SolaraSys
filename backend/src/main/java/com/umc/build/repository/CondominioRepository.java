package com.umc.build.repository;

import com.umc.build.model.Condominio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDate;
import java.util.List;


@Repository
public interface CondominioRepository extends JpaRepository<Condominio, Integer> {
    public void findCondominioByDataRegistro(LocalDate dataRegistro);

    @Query(value = "SELECT * FROM condominio WHERE id = :id", nativeQuery = true)
    Condominio idCondominio(@Param("id") Integer id);

    @Query(value = "SELECT * FROM condominio WHERE empresa_condominio_codigo = :empresa", nativeQuery = true)
    List<Condominio> findByEmpresa(@Param("empresa") Integer empresa);
}
