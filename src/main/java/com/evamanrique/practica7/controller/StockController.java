package com.evamanrique.practica7.controller;


import com.evamanrique.practica7.model.Entrada;
import com.evamanrique.practica7.service.StockService;
import com.evamanrique.practica7.model.Dispositivo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.validation.Valid;
import java.util.ArrayList;


@Controller
public class StockController implements WebMvcConfigurer {

    @Autowired
    private StockService stockService;

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/verStock").setViewName("verStock");
    }


    @GetMapping("/stock")
    public ResponseEntity<Iterable<Dispositivo>> retrieveDispositivos(@RequestParam(required = false) String existencias) {
        Iterable<Dispositivo> respuesta = stockService.retrieveDispositivos(existencias);
        return ResponseEntity.ok().body(respuesta);
    }



    @PutMapping("/stock/{identificador}")
    public ResponseEntity<Dispositivo> updateDispositivo(@PathVariable String identificador, @RequestBody Dispositivo dispositivo) {

        Dispositivo newDispositivo = stockService.updateDispositivo(identificador,dispositivo);
        if(newDispositivo == null)
        {
            return ResponseEntity.badRequest().body(null);
        }
        return ResponseEntity.ok().body(newDispositivo);
    }



    @DeleteMapping("/stock/{identificador}")
    public ResponseEntity<Dispositivo> deleteDispositivo(@PathVariable String identificador)
    {
        stockService.deleteDispositivo(identificador);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/stock/{identificador}")
    public ResponseEntity<Dispositivo> retrieveDispositivo(@PathVariable String identificador) {

        Dispositivo respuesta = stockService.retrieveDispositivo(identificador);
        return ResponseEntity.ok().body(respuesta);

    }


}