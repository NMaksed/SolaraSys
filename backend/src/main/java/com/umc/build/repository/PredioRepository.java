package com.umc.build.repository;

import com.umc.build.model.Predio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface PredioRepository extends JpaRepository<Predio, Integer> {

    public void findPredioByDataRegistro(LocalDate dataRegistro);
}
