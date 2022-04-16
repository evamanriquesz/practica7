
let accederInstagram = () => {
    window.open("https://www.instagram.com/apple/","_blank");
}


let  accederTwitter = () => {
    window.open("https://twitter.com/apple","_blank");
}

let accederFacebook = () => {
    window.open("https://www.facebook.com/apple/","_blank");
}



function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },5); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });

}

function mostrar_json()
{
     let inputNombre =  "[[${entrada.nombre}]]";
     let inputApellidos =  "[[${entrada.apellidos}]]";
     let inputEmail = "[[${entrada.email}]]";
     let inputEdad = "[[${entrada.edad}]]";
     let inputCiudad =  "[[${entrada.ciudad}]]";
     let inputPais =  "[[${entrada.pais}]]";
     let inputHablanosDeTi = "[[${entrada.hablanosDeTi}]]";

     let datos = [];
     let obj = {};

     datos.push(
     {
        "nombre" : inputNombre,
        "apellidos" :inputApellidos,
        "email": inputEmail,
        "edad" : inputEdad,
        "ciudad" : inputCiudad,
        "pais":inputPais,
        "hablanosDeTi":inputHablanosDeTi,
     });

     obj.datos = datos;
     console.log(JSON(stringify(obj)));

     document.getElementById('json').innerHTML =JSON.stringify(obj, null, '\t');
     }

     setTimeout(function(){hola();}, 1000)
}