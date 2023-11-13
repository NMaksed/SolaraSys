package com.umc.build.serviceImpl;

import com.umc.build.model.Evento;
import com.umc.build.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventoServiceImpl {

    @Autowired
    private EventoRepository eventoRepository;

    public Evento agendarEspaco(Evento agendaEspaco) { eventoRepository.save(agendaEspaco);
        return agendaEspaco;
    }
}