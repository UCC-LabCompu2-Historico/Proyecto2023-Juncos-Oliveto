/**
 * Avisa cuando el nombre ingresado es puramente un numero
 * @method alerta
 */
let alerta = () => {
    let nombre = document.getElementById("nombre").value;

    if (isNaN(nombre)) {
    } else {
        document.getElementById("nombre").value = '';
        alert("Ingrese un nombre válido")
    }
}

/**
 * Nos cambia la edad a medida que nos movemos en el selector
 * @method deslizante
 * @return
 */
let deslizante = () => {
    let edad = document.getElementById("edad").value;
    document.getElementById("outedad").value = edad;
}

/**
 * Guardamos datos ingresados por el usuario en 'index.html' usando localstorage para usarlos en 'Rutina.html'
 * @method guardarLocalStorageIndex
 */
let guardarLocalStorageIndex = () => {
    let nombre, sexo, edad, nivel, objetivo;

    nombre = document.getElementsByName("nombre")[0].value;
    sexo = document.getElementById("sexo").value;
    edad = document.getElementsByName("edad")[0].value;
    nivel = document.getElementById("nivel").value;
    objetivo = document.getElementById("objetivo").value;

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
let cargarLSnombre = () => {
    let nombreUsuario;

    nombreUsuario = localStorage.getItem("nombreLS");

    document.getElementById("nombreUsu").value = nombreUsuario;

}

/**
 * Limitamos la cantidad de checkboxes que pueden ser tildados
 * @method limiteChckbox
 * @return boolean
 */
let limiteChckbox = () => {           //Si no usamos return nos sigue permitiendo tildar el checkbox

    let chckbox = document.getElementsByName("selector");

    let cont;

    let tildes = 0;

    for (cont = 0; cont < chckbox.length; cont++) {

        if (chckbox[cont].checked === true) {
            tildes = tildes + 1;
        }

    }

    if (tildes >= 5) {
        alert("No seleccione mas de 4 musculos");
        return false;
    }

}

/**
 * Establecemos un minimo de 1 checkbox tildado
 * @method validate
 * @return boolean
 */

let validate = () => {

    var form = document.getElementsByName("selector");
    var minimo = false;

    for (var i = 0; i < form.length; i++) {

        if (form[i].checked) {
            minimo = true;
        }

    }

    if (minimo === false) {
        alert("Debes seleccionar al menos un musculo");
        return false;
    }

}