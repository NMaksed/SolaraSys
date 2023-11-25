package com.umc.build.repository;

import com.umc.build.model.Apartamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ApartamentoRepository extends JpaRepository<Apartamento, Integer> {


    @Query(value = "SELECT * FROM apartamento WHERE id = :id", nativeQuery = true)
    Apartamento idApartamento(@Param("id") Integer id);
}
