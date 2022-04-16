package com.evamanrique.practica7.service.implementation;

import com.evamanrique.practica7.model.Dispositivo;
import com.evamanrique.practica7.repository.StockRepository;
import com.evamanrique.practica7.service.StockService;
import com.evamanrique.practica7.model.Dispositivo;
import com.evamanrique.practica7.repository.StockRepository;
import com.evamanrique.practica7.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockServiceImplementation implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
     public Iterable<Dispositivo> retrieveDispositivos(String existencias) {
         if(existencias==null)
         {
             return stockRepository.findAll();

         }else {
             int existenciasInt = Integer.parseInt(existencias);
             return stockRepository.retrieveDispositivoByExistencias(existenciasInt);
         }
    }

    //esto me sirve para actualizar las existenicias
    @Override
    public Dispositivo updateDispositivo(String identificador, Dispositivo dispositivo)
    {
        if(stockRepository.existsById(identificador))
        {
            return stockRepository.save(dispositivo); //para no actualizar un dispositivo que no exista
        }else{
            return null;
        }

    }


    @Override
    public void deleteDispositivo(String identificador)
    {
        stockRepository.deleteById(identificador);
    }

    @Override
    public Dispositivo retrieveDispositivo(String identificador)
    {
        Dispositivo respuesta = null;
        if(stockRepository.existsById(identificador)) {
           Iterable<Dispositivo> dispositivos =  stockRepository.retrieveDispositivo(identificador);

           for (Dispositivo dispositivo: dispositivos)
           {
              respuesta=dispositivo;
           }
        }
        return respuesta;
    }

}
