# PRÁCTICA 7 - APPLE CON PERSISTENCIA EN MEMORIA

## ENDPOINT
http://localhost:8080

## PROBAR EN GITPOD 

[![](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/evamanriquesz/practica5)

Nota: En GitPod ocurre un error de compilación relacionado con Maven que no ocurría al probarlo en local.

## OBJETIVO DE LA PRÁCTICA
El objetivo de esta práctica es familiarizarse con el uso de SpringBoot.

## EXPLICACIÓN

Para esta práctica, he utilizado la página que creé para Apple en la Práctica 4, adaptando el formulario de la pagina contactanos.html para 
usar SpringBoot. 

En la parte superior de cualquiera de las pantallas encontramos la cabecera, que contiene el logo de la empresa y los
botones para cambiar a cualquiera de las otras páginas. En la parte inferior de todas ellas también encontramos un objeto 
de paginación para poder cambiar de ventana desde ahí también, además de tres botones para acceder a las redes sociales de la marca; 
y un botón (flechas hacia arriba), para subir al principio de la página. Puedes desplazarte por todas las páginas. 

El funcionamiento de las páginas Inicio, Productos, Iniciativas sostenibles y Bolsa es idéntico al de la práctica 4.

En la última página, Contáctanos, podemos enviar nuestra solicitud de trabajo. Aquí ese donde he aplicado SpringBoot. 
Para poder acceder se debe escribir en el navegador  localhost:8080/MostrarForm  , ya que así te llevará directamente 
a la página de Contáctanos. Si prefieres navegar por las otras páginas, y después acceder a Contáctanos, también es posible, 
tanto pulsando en Contáctanos en la barra superior, como a través del objeto de paginación. 

En el formulario se te pide introducir nombre, apellidos, email, edad, ciudad y país donde te gustaría trabajar, e información
extra que consideres importante. 

Cuando introduces tus datos, y pulsas a "Enviar Formulario", se comprueba que todos los campos estén rellenos, que la longitud de 
los campos de texto esté entre 2 y otro valor (dependiendo de cada campo), y que la edad sea mayor que 18 años. 
Si todo va bien, se redirige al endpoint EnviarForm, que es la clase formularioAceptado, donde te dice que, efectivamente, todo es correcto. Para la validación de los campos, 
he utilizado Java Bean Validation's @Valid constraint. 

Para el correcto funcionamiento del formulario he hecho uso de Thymeleaf en contactanos.html. 

Si ocurre algún error en el funcionamiento de la práctica, se te redirige a la página error.html que contiene un mensaje de error. 



## PROBAR LA PRÁCTICA

Para probar el correcto funcionamiento de la práctica: 
* Navegar por las distintas páginas
* Contáctanos
  * Rellenar el formulario
  * Probar a equivocarse rellenando los campos para ver cómo te avisa de los errores
  * Cambiar de página usando los botones superiores o el objeto de paginación inferior
  * Acceder a las redes sociales
  * Doble click en las fechas para subir arriba
* En la clase formularioAceptado, que es a la que se te redirige cuando envias el formulario correctamente, puedes leer los datos que 
has introducido y volver atrás pulsando sobre cerrar
* También puedes acceder a las redes sociales o a las otras páginas, pulsando sobre sus botones

