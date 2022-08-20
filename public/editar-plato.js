//liga con el input de la indetificacion en el html
const inputNumTarjeta = document.getElementById("plato99");
const inputFechaExpiracion = document.getElementById("ingredientes99");
const inputcvv = document.getElementById("costo99");

let plato22 = localStorage.getItem("plato");
//console.log(plato22);
alert("###########################################");
alert(plato22);

let _id;

const llenar_campos = async() => {
    let persona999 = await obtener_persona_plato(plato22);

    _id = persona999[0]._id;

    //console.log(persona999);
    //console.log(persona999[0].foto);
    inputNumTarjeta.value = persona999[0].plato;
    inputFechaExpiracion.value = persona999[0].ingredientes;
    inputcvv.value = persona999[0].costo;

}


//campos vacios
function camposVacios() {
    //alert("ojo0");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor1 [required]");
    for (let i = 0; i < campos_requeridos.length; i++) {
        if (campos_requeridos[i].value == "") {
            error = true;
            campos_requeridos[i].classList.add("error");
            campos_requeridos[i].style.border = 'solid 2px red';

        } else {
            campos_requeridos[i].classList.remove("error");
            campos_requeridos[i].style.border = 'solid 1px black';

        }
    }
    return error;
}

//validar cvv
function validarCvv() {
    //alert("Boton Presionado2");
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor1 [required]");
    //alert("Boton Presionado3");
    let texto_usuario = inputcvv.value;
    //alert("Boton Presionado4");
    
    let expresion_tarjeta = /[1-9]/;
    let expresion_tarjeta2 = /-/;
    //alert("Boton Presionado5");
        
    
    if (expresion_tarjeta.test(texto_usuario) == false) {
        error = true;
        inputNumTarjeta.classList.add("error");
        campos_requeridos[2].style.border = 'solid 2px red';
        
    } else if (expresion_tarjeta2.test(texto_usuario) == true) {
        error = true;
        inputNumTarjeta.classList.add("error");
        campos_requeridos[2].style.border = 'solid 2px red';

    } else {
        inputNumTarjeta.classList.remove("error");
        campos_requeridos[2].style.border = 'solid 1px black';
    }

    return error;
    
    
}

//&& expresion_tarjeta2 > 0



function enviar_informacion222() {
    //alert("Boton Presionado1");
    //Swal.fire('Any fool can use a computer');
    let error_campos_vacios = camposVacios();
    let error_cvv = validarCvv();

    if (error_campos_vacios) {
        //alert("ojo1");
        swal.fire({
            
            incon:"warning",
            title:"Campos Vacios",
            text: "Los campos señalados son obligatorios"
        });

    } else if (error_cvv) {
        Swal.fire({
            icon: "warning",
            title: "Precio inválido",
            text: "Precio inválido"
        });

    } else {
        //alert("ojo2");
        
        let platox = inputNumTarjeta.value;
        let ingredientesx = inputFechaExpiracion.value;
        let costox = inputcvv.value;

        //let platox = "w";
        //let ingredientesx = "w";
        //let costox = "1111";

        modificar_persona(platox, ingredientesx, costox, _id);

        swal.fire({
            incon:"success",
            title:"Exito",
            text: "Registro Exitoso"
            //document,getElementById("entry_nombre_tarjeta").value = "";
            //document,getElementById("entry_numero_tarjeta").value = "";
            //document,getElementById("cvv").value = "";
            
            
        });
    }


}

const eliminar = () => {
    eliminar_persona(_id);
}


llenar_campos();



