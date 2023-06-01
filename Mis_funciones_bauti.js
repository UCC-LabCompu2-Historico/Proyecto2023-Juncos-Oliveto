/**
 * Avisa cuando el nombre ingresado es puramente un numero
 * @method alerta
 * @return
 */

let alerta = () => {
    let nombre = document.getElementById("nombre").value;

    if(isNaN(nombre)){
    }else{
        nombre="";
        alert("Ingrese un nombre acorde")
    }
}

/**
 * Nos cambia la edad a medida que nos movemos en el selector
 * @method deslizante
 * @return
 */
let deslizante= () =>{
    var edad=document.getElementById("edad").value;
    document.getElementById("outedad").value=edad;
}

/**
 * Guardamos datos ingresados por el usuario en 'index.html' usando localstorage para usarlos en 'Rutina.html'
 * @method guardarLocalStorageIndex
 */

let guardarLocalStorageIndex = () =>{
    let nombre, sexo, edad, nivel, objetivo;

    nombre=document.getElementsByName("nombre")[0].value;
    sexo=document.getElementById("sexo").value;
    edad=document.getElementsByName("edad")[0].value;
    nivel=document.getElementById("nivel")[0].value;
    objetivo=document.getElementById("objetivo").value;

    localStorage.setItem("nombreLS", nombre);
    localStorage.setItem("sexoLS", sexo);
    localStorage.setItem("edadLS", edad);
    localStorage.setItem("nivelLS", nivel);
    localStorage.setItem("objetivoLS", objetivo);

}

/**
 * Cargamos el nombre del usuario en la rutina para darle una atencion mas personalizada
 * @method cargarLSnombre
 */

let cargarLSnombre = () =>{
    var nombreUsuario;

    nombreUsuario=localStorage.getItem("nombreLS");

    document.getElementById("nombreUsu").value=nombreUsuario;

}
