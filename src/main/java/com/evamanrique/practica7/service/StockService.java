package com.evamanrique.practica7.service;

import com.evamanrique.practica7.model.Dispositivo;

public interface StockService {
    Iterable<Dispositivo> retrieveDispositivos(String existencias);
    Dispositivo updateDispositivo(String identificador, Dispositivo dispositivo);
    void deleteDispositivo(String identificador);
    Dispositivo retrieveDispositivo(String identificador);
}
