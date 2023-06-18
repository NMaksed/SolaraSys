package com.umc.build.service;

import com.umc.build.model.Morador;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface MoradorService {

    public Morador salvarMorador(Morador morador);
    public List<Morador> getMorador();
}
