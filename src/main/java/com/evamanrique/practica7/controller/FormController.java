package com.evamanrique.practica7.controller;

import com.evamanrique.practica7.model.Entrada;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.validation.Valid;

@Controller
public class FormController implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/formularioAceptado").setViewName("formularioAceptado");
    }

    @GetMapping("/MostrarForm")
    public String contactanosForm(Model model) {
        model.addAttribute("entrada", new Entrada());
        return "contactanos";
    }


    @PostMapping("/EnviarForm")
    public String contactanosSubmit(@Valid @ModelAttribute("entrada") Entrada entrada, BindingResult bindingResult, Model model)
    {
        model.addAttribute("entrada", entrada);

        if(bindingResult.hasErrors())
        {
            return "contactanos";
        }
        return "formularioAceptado";
    }


}
