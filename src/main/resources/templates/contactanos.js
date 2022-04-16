/*
// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}


const form = document.querySelector("#signup");

const NOMBRE_REQUIRED = "Por favor, introduce tu nombre";
const APELLIDOS_REQUIRED = "Por favor, introduce tus apellidos";
const EMAIL_REQUIRED = "Por favor, introduce tu email";
const EMAIL_INVALID = "Por favor, introduce un email válido";
const FECHA_NACIMIENTO_REQUIRED = "Por favor, introduce tu fecha de nacimiento";
const CIUDAD_REQUIRED = "Por favor, introduce una ciudad";
const PAIS_REQUIRED = "Por favor, introduce un pais";
const TRABAJO_PREVIO_REQUIRED = "Por favor, marque si ha trabajado antes con nosotros";
const HABLANOS_DE_TI_REQUIRED ="Por favor, háblanos de ti";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nombreValid = hasValue(form.elements["nombre"], NOMBRE_REQUIRED);
	let apellidosValid = hasValue(form.elements["apellidos"], APELLIDOS_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	let fechaNacimientoValid = hasValue(form.elements["fechaNacimiento"], FECHA_NACIMIENTO_REQUIRED);
	let ciudadValid = hasValue(form.elements["ciudad"], CIUDAD_REQUIRED);
	let paisValid = hasValue(form.elements["pais"], PAIS_REQUIRED);
	let hablanosDeTiValid = hasValue(form.elements["hablanosDeTi"], HABLANOS_DE_TI_REQUIRED);
	// if valid, submit the form.
	if (nombreValid && apellidosValid && fechaNacimientoValid && emailValid && ciudadValid && paisValid && hablanosDeTiValid) {
		alert("Nombre introducido: " +form.elements["nombre"].value  + "\nApellidos introducidos: " + form.elements["apellidos"].value + "\nEmail introducido: " + form.elements["email"].value +"\nFecha de nacimiento: " + form.elements["fechaNacimiento"].value + "\nCiudad introducida: "+form.elements["ciudad"].value + "\nPaís introducido: "+ form.elements["pais"].value + "\nHáblanos de ti: " + form.elements["hablanosDeTi"].value);
	}
});
*/

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

/*

const getEntradaData = async() => {
    let inputNombre = document.getElementById(nombre).value;
    let inputApellidos = document.getElementById(apellidos).value;
    let inputEmail = document.getElementById(email).value;
    let inputEdad = document.getElementById(fechaNacimiento).value;
    let inputCiudad = document.getElementById(ciudad).value;
    let inputPais = document.getElementById(pais).value;
    //let inputTrabajado = document.getElementById(trabajado); --> eso iba a dar error, ya vere como ponerlo
    let inputHablanosDeTi = document.getElementById(hablanosDeTi).value;
}

const postEntrada = async(entrada) => {

    let inputNombre = document.getElementById(nombre).value;
    let inputApellidos = document.getElementById(apellidos).value;
    let inputEmail = document.getElementById(email).value;
    let inputFechaNacimiento = document.getElementById(fechaNacimiento).value;
    let inputCiudad = document.getElementById(ciudad).value;
    let inputPais = document.getElementById(pais).value;
    //let inputTrabajado = document.getElementById(trabajado); --> eso iba a dar error, ya vere como ponerlo
    let inputHablanosDeTi = document.getElementById(hablanosDeTi).value;

    let request = await fetch("/EnviarContactanosForm", {
        method: "POST",
         credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        dataType: "json",
        body: JSON.stringify ({
             nombre :inputNombre,
            apellidos : inputApellidos,
            email: inputEmail,
            fechaNacimiento : inputFechaNacimiento,
            ciudad : inputCiudad,
            pais : inputPais,
            //trabajado: inputTrabajado,
            hablanosDeTi : inputHablanosDeTi

        })
    });

    if(request.status === 200)
    {
        let data = await request.json();
        addEntrada(data);
    }
}
*/
function validarFormulario()
{
    try
    {
         let inputNombre = document.getElementById(nombre).value;
         let inputApellidos = document.getElementById(apellidos).value;
         let inputEmail = document.getElementById(email).value;
         let inputEdad = document.getElementById(edad).value;
         let inputCiudad = document.getElementById(ciudad).value;
         let inputPais = document.getElementById(pais).value;
         //let inputTrabajado = document.getElementById(trabajado); --> eso iba a dar error, ya vere como ponerlo
         let inputHablanosDeTi = document.getElementById(hablanosDeTi).value;

        const datos = {
            nombre: inputNombre,
            apellidos :inputApellidos,
            email: inputEmail,
            edad:inputEdad,
            ciudad:inputCiudad,
            pais: inputPais,
            hablanosDeTi:inputHablanosDeTi
        } ;

       fetch("/EnviarContactanosForm", {
           method: "POST",
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(datos)
        })

        .then(response=> response.json())
        .then(data=> {
        console.log(data);
        if (data.result =="OK")
        {
          console.log("Correcto");
                    document.location.href="./formularioAceptado.html";
                    alert("Gracias por tu interés " + inputNombre + ", recibirás información en un plazo máximo de dos semanas. ")
        } else {
            document.location.href="./contactanos.html";
            alert("Rellene todos los campos como se le inidica");
        }
        });

    } catch (e)
    {
        console.error(e.message);
    }

    return false;

}





