package com.umc.build.serviceImpl;

import com.umc.build.model.Apartamento;
import com.umc.build.repository.ApartamentoRepository;
import com.umc.build.repository.PredioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ApartamentoServiceImpl {

    @Autowired
    private ApartamentoRepository apartamentoRepository;
    @Autowired
    private PredioRepository predioRepository;



    public void salvarApartamento(Apartamento apartamento) {
        apartamentoRepository.save(apartamento);
    }

    public List<Apartamento> getApartamento() {
        return apartamentoRepository.findAll();
    }

    public void validateApartamentoPredio(LocalDate dataRegistro) {
        predioRepository.findPredioByDataRegistro(dataRegistro);
    }
}
