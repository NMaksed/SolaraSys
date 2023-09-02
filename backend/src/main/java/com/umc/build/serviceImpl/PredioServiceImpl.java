package com.umc.build.serviceImpl;


import com.umc.build.model.Condominio;
import com.umc.build.model.Predio;
import com.umc.build.repository.CondominioRepository;
import com.umc.build.repository.PredioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class PredioServiceImpl {

    @Autowired
    private PredioRepository predioRepository;
    @Autowired
    private CondominioRepository condominioRepository;

    public void salvarPredio(Predio predio) { predioRepository.save(predio); }
    public List<Predio> getPredio() { return predioRepository.findAll(); }
    public void validatePredioCondominiobyId(Integer id) throws Exception{
        Optional<Condominio> condominioOptional = condominioRepository.findById(id);

        if (condominioOptional.isEmpty()) {
            throw new Exception("Condominio: " + id + " não existe!");
        }
    }
}
