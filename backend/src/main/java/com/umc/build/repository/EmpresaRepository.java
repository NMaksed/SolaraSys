package com.umc.build.repository;

import com.umc.build.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Integer> {

    Optional<Empresa> findByCnpj(String cnpj);
}
