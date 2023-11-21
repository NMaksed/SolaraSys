package com.umc.build.repository;

import com.umc.build.model.Conversa;
import com.umc.build.model.Morador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ConversaRepository extends JpaRepository<Conversa, Integer> {

    Conversa findByMorador1IDAndMorador2ID(Morador morador1, Morador morador2);
}
