package com.umc.build.serviceImpl;


import com.umc.build.model.Predio;
import com.umc.build.repository.CondominioRepository;
import com.umc.build.repository.PredioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PredioServiceImpl {

    @Autowired
    private PredioRepository predioRepository;
    @Autowired
    private CondominioRepository condominioRepository;

    public void salvarPredio(Predio predio) { predioRepository.save(predio); }
    public List<Predio> getPredio() { return predioRepository.findAll(); }
    public void validatePredioCondominio(LocalDate dataRegistro) {
        condominioRepository.findCondominioByDataRegistro(dataRegistro);
    }
}
