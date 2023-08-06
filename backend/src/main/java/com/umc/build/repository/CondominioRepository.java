package com.umc.build.repository;

import com.umc.build.model.Condominio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CondominioRepository extends JpaRepository<Condominio, Integer> {
}
