package com.umc.build.serviceImpl;

import com.umc.build.model.Apartamento;
import com.umc.build.model.Predio;
import com.umc.build.repository.ApartamentoRepository;
import com.umc.build.repository.PredioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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

    public void validateApartamentoPredio(Integer id) throws Exception{
        Optional<Predio> predioOptional = predioRepository.findById(id);

        if (predioOptional.isEmpty()) {
            throw new Exception("Prédio: " + id + " não existe!");
        }
    }
}
