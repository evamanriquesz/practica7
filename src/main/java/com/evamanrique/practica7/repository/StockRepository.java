package com.evamanrique.practica7.repository;

import com.evamanrique.practica7.model.Dispositivo;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface StockRepository extends CrudRepository<Dispositivo, String> {
    @Query("SELECT * FROM STOCK WHERE STOCK.EXISTENCIAS= :existencias")
    public Iterable<Dispositivo> retrieveDispositivoByExistencias(int existencias);

    @Query("SELECT * FROM STOCK WHERE STOCK.IDENTIFICADOR = :identificador")
    public Iterable<Dispositivo> retrieveDispositivo(String identificador);

}
