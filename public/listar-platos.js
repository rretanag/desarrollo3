const tbody = document.querySelector("#informacion-registro tbody");
const input_filtro = document.querySelector("#txt_filtro");

let listado_de_usuarios = [];

const mostrar_datos_en_tabla = async() => {
    listado_de_usuarios = await listar_personas_BD();

    tbody.innerHTML = "";

    for (let i = 0; i < listado_de_usuarios.length; i++) {
        let fila = tbody.insertRow();

        let celda_plato = (fila.insertCell().innerHTML = listado_de_usuarios[i]["plato"]);
        let celda_ingredientes = (fila.insertCell().innerHTML = listado_de_usuarios[i]["ingredientes"]);
        let celda_costo = (fila.insertCell().innerHTML = listado_de_usuarios[i]["costo"]);

        //editar
        let celda_btn_editar = fila.insertCell();
        let botonx = document.createElement("button");

        botonx.innerText="Editar";

        botonx.addEventListener("click",()=>{
            //console.log(listado_de_usuarios[i]_id);
            //localStorage.setItem("id_mongo", listado_de_usuarios[i]_id);
            localStorage.setItem("plato", listado_de_usuarios[i].plato);
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
        let costo = listado_de_usuarios[i]["costo"].toLowerCase();
        let ingredientes = listado_de_usuarios[i]["ingredientes"];

        if (costo.includes(filtro) || ingredientes.includes(filtro)) {
            let fila = tbody.insertRow();

            let celdaplato = (fila.insertCell().innerHTML = listado_de_usuarios[i]["plato"]);
            let celdaingredientes = (fila.insertCell().innerHTML = listado_de_usuarios[i]["ingredientes"]);
            let celdacosto = (fila.insertCell().innerHTML = listado_de_usuarios[i]["costo"]);

            coincidencias = true;
        }

        if (coincidencias == false) {
            tbody.innerHTML = "No hay se encontraron registros para esta búsqueda"
        }


    }

}

//mostrar_datos_en_tabla();

input_filtro.addEventListener("keyup", filtrar_datos);