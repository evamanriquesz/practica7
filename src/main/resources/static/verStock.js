let div;

 function anadirExistencia(identificador){
console.log("añadir " + identificador);
anadir(identificador);
//show();
}


async function anadir(identificador){
    //Evito que recargue la página
    event.preventDefault();

     let res = await fetch("/stock",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        }});

        console.log(res);

        if (res.status == 200){
            const data = await res.json();
            //console.log(data); //ok
            //console.log(data[0]); //ok
             for (let i=0; i<data.length; i++)
             {
                 let dispositivo1 = data[i];
                 let identificador1 = dispositivo1["identificador"];
                 let modelo1 = dispositivo1["modelo"];
                 let color1 = dispositivo1["color"];
                 let existencias1 = dispositivo1["existencias"];

                 console.log("iden: " + identificador);
                 console.log("iden1: " + identificador1);

                 if (identificador == identificador1)
                 {
                    console.log("este es el bueno: "+ identificador1); //ok
                    let nuevasExistencias = existencias1+1;
                    const dataObj = {
                            "identificador" : identificador1,
                            "modelo" : modelo1,
                            "color" : color1,
                            "existencias" : nuevasExistencias
                        };

                        let res1 = await fetch("/stock/"+identificador1,{
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(dataObj)
                        });
                        console.log("nuevas existenicas "+ nuevasExistencias);
                        showDispositivos();

                 }
             }
        }

}


 function borrarExistencia(identificador){
console.log("borrar " + identificador);
borrar(identificador);

}


async function borrar(identificador){
    //Evito que recargue la página
    event.preventDefault();

     let res = await fetch("/stock",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        }});

        console.log(res);

        if (res.status == 200){
            const data = await res.json();
            //console.log(data); //ok
            //console.log(data[0]); //ok
             for (let i=0; i<data.length; i++)
             {
                 let dispositivo1 = data[i];
                 let identificador1 = dispositivo1["identificador"];
                 let modelo1 = dispositivo1["modelo"];
                 let color1 = dispositivo1["color"];
                 let existencias1 = dispositivo1["existencias"];

                 console.log("iden: " + identificador);
                 console.log("iden1: " + identificador1);

                 if (identificador == identificador1)
                 {
                    console.log("este es el bueno: "+ identificador1); //ok
                    let nuevasExistencias = existencias1-1;
                    const dataObj = {
                            "identificador" : identificador1,
                            "modelo" : modelo1,
                            "color" : color1,
                            "existencias" : nuevasExistencias
                        };

                        let res1 = await fetch("/stock/"+identificador1,{
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(dataObj)
                        });
                        console.log("nuevas existenicas "+ nuevasExistencias);
                        showDispositivos();

                 }
             }
        }

}

function showDispositivos(){
    console.log("hola");
    show();
}


    async function show(){
        //Evito que recargue la página
        //event.preventDefault();

        let res = await fetch("/stock",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        }});

        //console.log(res);

        if (res.status == 200){
            const data = await res.json();
            //console.log(data); //ok
            //console.log(data[0]); //ok
            div = document.getElementById("mostrar");

             let contenidoHTML='';
             for (let i=0; i<data.length; i++)
             {
             let dispositivo1 = data[i];
             let identificador1 = dispositivo1["identificador"];
             let modelo1 = dispositivo1["modelo"];
             let color1 = dispositivo1["color"];
             let existencias1 = dispositivo1["existencias"];

             contenidoHTML = contenidoHTML + '<div class="card" id="ident' + i+1 + ' "><div class="card-body"><h4 class="card-title"> Dispositivo: ' + modelo1 + ', Color: ' + color1 + '</h4><p class="card-text">Identificador: ' + identificador1 + ' , Existencias: ' + existencias1+ '</p><button type="button" class="btn btn-light" onclick ="anadirExistencia('+identificador1+')">Añadir existencia</button><button type="button" class="btn btn-light" onclick="borrarExistencia('+identificador1+')">Borrar existencia</button><button type="button" class="btn btn-light" onclick="borrarDispositivo('+identificador1+')">Borrar dispositivo</button></div></div>';


             console.log("identificador " + identificador1); //ok
             console.log("existenicas: " + existencias1);
        }
        div.innerHTML = contenidoHTML;

    }

    }

function borrarDispositivo(identificador)
{
    console.log("Borrar dispositivo");
    borrarDisp(identificador);
}

async function borrarDisp(identificador){
    event.preventDefault();
       event.preventDefault();

         let res = await fetch("/stock",{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
            }});

            console.log(res);

            if (res.status == 200){
                const data = await res.json();
                //console.log(data); //ok
                //console.log(data[0]); //ok
                 for (let i=0; i<data.length; i++)
                 {
                     let dispositivo1 = data[i];
                     let identificador1 = dispositivo1["identificador"];
                     let modelo1 = dispositivo1["modelo"];
                     let color1 = dispositivo1["color"];
                     let existencias1 = dispositivo1["existencias"];

                     console.log("iden: " + identificador);
                     console.log("iden1: " + identificador1);

                     if (identificador == identificador1)
                     {
                        console.log("este es el bueno: "+ identificador1); //ok


                            let res2 = await fetch("/stock/"+identificador1,{
                                method: 'DELETE',
                            });
                            showDispositivos();

                     }
                 }
            }


}




