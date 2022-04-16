package com.evamanrique.practica7.model;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;

public class Entrada implements Serializable {

    @NotNull
    @Size(min=2, max=50)
    private String nombre;

    @NotNull
    @Size(min=2, max=50)
    private String apellidos;

    @NotNull
    @Size(min=2, max=50)
    private String email;

    @NotNull
    @Min(18)
    private int edad;

    @NotNull
    @Size(min=2, max=30)
    private String ciudad;

    @NotNull
    @Size(min=2, max=30)
    private String pais;

    private boolean trabajado;

    @NotNull
    @Size(min=2, max=200)
    private String hablanos_de_ti;

    public Entrada(String nombre, String apellidos, String email, int edad, String ciudad, String pais, String hablanos_de_ti) {
        this.setNombre(nombre);
        this.setApellidos(apellidos);
        this.setEmail(email);
        this.setEdad(edad);
        this.setCiudad(ciudad);
        this.setPais(pais);
        this.setHablanosDeTi(hablanos_de_ti);
    }

    public Entrada() {

    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getHablanosDeTi() {
        return hablanos_de_ti;
    }

    public void setHablanosDeTi(String hablanos_de_ti) {
        this.hablanos_de_ti = hablanos_de_ti;
    }
}
