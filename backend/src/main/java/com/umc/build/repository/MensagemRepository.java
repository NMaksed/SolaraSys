package com.umc.build.repository;

import com.umc.build.model.Mensagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MensagemRepository extends JpaRepository<Mensagem, Integer> {

}
