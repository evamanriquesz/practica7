# PRÁCTICA 7 - APPLE CON PERSISTENCIA EN MEMORIA

## ENDPOINT
http://localhost:8080

## PROBAR EN GITPOD 

[![](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/evamanriquesz/practica7)


## OBJETIVO DE LA PRÁCTICA
El objetivo de esta práctica es desarrollar una App de Spring Boot que incluya una funcionalidad que permita persistir información utilizando la librería Spring Data JDBC con una base de datos H2.

## EXPLICACIÓN

Para esta práctica, he utilizado la página que creé para Apple en la Práctica 4, añadiendo una última pestaña, llamada verStock.html en la que se muestra el stock de la página web de Apple.

En la parte superior de cualquiera de las pantallas encontramos la cabecera, que contiene el logo de la empresa y los
botones para cambiar a cualquiera de las otras páginas. En la parte inferior de todas ellas también encontramos un objeto 
de paginación para poder cambiar de ventana desde ahí también, además de tres botones para acceder a las redes sociales de la marca; 
y un botón (flechas hacia arriba), para subir al principio de la página. Puedes desplazarte por todas las páginas. 

El funcionamiento de las páginas Inicio, Productos, Iniciativas sostenibles, Bolsa y Contáctanos es idéntico al de las prácticas 4 y 5.

En la última página, verStock, podemos ver el stock de la tienda de apple de cada dispositivo en cada color. La primary key de la tabla es 
el identificador. Las otras claves son: modelo, color y existencias. Desde esta página, si pulsas el botón, te mostrará todas las existencias de cada
modelo, además de ofrecer tres botones para cada modelo de dispositivo. Estos botones serán de añadir existencias, borrar existencias y borrar el dispositivo. 
Tanto para añadir como para borrar existencias he utilizado la anotación @PutMapping en el controller (que es StockController); y para borrar los dispositivos, 
he utilizado la anotación @DeleteMapping. Para mostrarlos todos, @GetMapping. 

En el archivo data.sql se encuentran los inserts de los elementos iniciales de la base de datos; que luego se van modificando. 
En la práctica se pedia usar dos @Query, que se encuentran en la clase StockRepository.java. Uno de ellos es para obtener los dispositivos dadas ciertas existencias, 
y el otro para obtener el dispositivo correspondiente a un identificador. 

Para probar el funcionamiento del primero, se puede poner el el buscador (habiendo iniciado el servidor previamente): http://localhost:8080/stock/?existencias=6 y se mostrará un json de aquellos dispositivos
de los que sólo haya 6 unidades. El segundo se ha utilizado en los PUT y en el DELETE. También existe la posibilidad de hacer GET con esta Query pero no he implementado ningún boton para hacerlo.

Si ocurre algún error en el funcionamiento de la práctica, se te redirige a la página error.html que contiene un mensaje de error. 


## PROBAR LA PRÁCTICA

Para probar el correcto funcionamiento de la práctica: 
* Navegar por las distintas páginas
* verStock.html
  * Pulsar el botón de mostrar
  * Probar a añadir existencias
  * Probar a borrar existencias
  * Probar a borrar dispositivos
* Poner http://localhost:8080/stock en el buscador para ver un json con todo el stock
* Poner http://localhost:8080/stock/?existencias=6 para probar que solo aparezcan los dispositivos de los que queden 6 unidades
* También puedes acceder a las redes sociales o a las otras páginas, pulsando sobre sus botones

