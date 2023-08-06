package com.umc.build.service;

import com.umc.build.model.Condominio;

import java.util.List;

public interface CondominioService {

    public Condominio salvarCondominio(Condominio condominio);
    public List<Condominio> getCondominio();
}
