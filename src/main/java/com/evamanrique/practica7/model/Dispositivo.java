package com.evamanrique.practica7.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Data
@Builder
@Table("STOCK")
public class Dispositivo implements Serializable {
        @NotNull
        @Size(min=1, max=5)
        @Id
        private String identificador;

        @NotNull
        @Size(min=2, max=50)
        private String modelo;

        @NotNull
        @Size(min=2, max=50)
        private String color;

        @NotNull
        @Min(0)
        @Size(min=1, max=5)
        private int existencias;

        public Dispositivo()
        {

        }

        public Dispositivo(String identificador, String modelo, String color, int existencias)
        {
                this.setIdentificador(identificador);
                this.setModelo(modelo);
                this.setColor(color);
                this.setExistencias(existencias);
        }

        public String getIdentificador() {
                return identificador;
        }

        public void setIdentificador(String identificador) {
                this.identificador = identificador;
        }
        public String getModelo() {
                return modelo;
        }

        public void setModelo(String modelo) {
                this.modelo = modelo;
        }

        public String getColor() {
                return color;
        }

        public void setColor(String color) {
                this.color = color;
        }

        public int getExistencias() {
                return existencias;
        }

        public void setExistencias(int existencias) {
                this.existencias = existencias;
        }


}


