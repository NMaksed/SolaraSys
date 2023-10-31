package com.umc.build.repository;

import com.umc.build.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Integer> {

    Optional<Empresa> findByCnpj(String cnpj);

    @Query(value = "SELECT * FROM empresa e WHERE e.id = ?1", nativeQuery = true)
    Empresa trazPorid(Integer empresaid);


    void deleteById(Integer id);
}
