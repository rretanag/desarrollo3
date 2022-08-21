const tbody = document.querySelector("#informacion-registro tbody");
const input_filtro = document.querySelector("#txt_filtro");

let listado_de_usuarios = [];

const mostrar_datos_en_tabla = async() => {
    listado_de_usuarios = await listar_personas_BD();

    tbody.innerHTML = "";

    for (let i = 0; i < listado_de_usuarios.length; i++) {
        let fila = tbody.insertRow();

        let celda_nombre = (fila.insertCell().innerHTML = listado_de_usuarios[i]["nombre"]);
        let celda_apellidos = (fila.insertCell().innerHTML = listado_de_usuarios[i]["apellidos"]);
        let celda_email = (fila.insertCell().innerHTML = listado_de_usuarios[i]["email"]);

        //editar
        let celda_btn_editar = fila.insertCell();
        let botonx = document.createElement("button");

        botonx.innerText="Editar";

        botonx.addEventListener("click",()=>{
            //console.log(listado_de_usuarios[i]_id);
            //localStorage.setItem("id_mongo", listado_de_usuarios[i]_id);
            localStorage.setItem("nombre", listado_de_usuarios[i].nombre);
            window.location.href="editar-plato.html";


        })

        celda_btn_editar.appendChild(botonx);

    }
}


const filtrar_datos = () => {
    tbody.innerHTML = "";
    let filtro = input_filtro.value.toLowerCase();
    let coincidencias = false;

    for (let i = 0; i < listado_de_usuarios.length; i++) {
        let email = listado_de_usuarios[i]["email"].toLowerCase();
        let apellidos = listado_de_usuarios[i]["apellidos"];

        if (email.includes(filtro) || apellidos.includes(filtro)) {
            let fila = tbody.insertRow();

            let celdanombre = (fila.insertCell().innerHTML = listado_de_usuarios[i]["nombre"]);
            let celdaapellidos = (fila.insertCell().innerHTML = listado_de_usuarios[i]["apellidos"]);
            let celdaemail = (fila.insertCell().innerHTML = listado_de_usuarios[i]["email"]);

            coincidencias = true;
        }

        if (coincidencias == false) {
            tbody.innerHTML = "No hay se encontraron registros para esta búsqueda"
        }


    }

}

//mostrar_datos_en_tabla();

input_filtro.addEventListener("keyup", filtrar_datos);