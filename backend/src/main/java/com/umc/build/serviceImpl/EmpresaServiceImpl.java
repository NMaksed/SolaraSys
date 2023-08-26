package com.umc.build.serviceImpl;

import com.umc.build.model.Empresa;
import com.umc.build.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpresaServiceImpl {
    @Autowired
    private EmpresaRepository empresaRepository;
}
