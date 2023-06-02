/**
 * Funcion que calcula las calorias de mantenimiento de una persona
 * @method calcularCalorias
 * @return
 */
const calcularCalorias = () => {
    let resultado;
    let _sexo = String(document.getElementById("sexo").value);
    let _altura = Number(document.getElementById("altura").value);
    let _edad = Number(document.getElementById("edad").value);
    let _peso = Number(document.getElementById("peso").value);

    if (_sexo === "femenino") {
        resultado = 655 + (9.6 * _peso) + (1.8 * _altura) - (4.7 * _edad);
    } else if (_sexo === "masculino") {
        resultado = 66 + (13.7 * _peso) + (5 * _altura) - (6.75 * _edad);
    }

    if (_edad <= 0 || _peso <= 0 || _altura <= 0) {
        /*_edad="";
        _peso="";
        _altura="";*/
        alert("Los valores ingresados son incorrectos");
    } else {
        document.getElementById("resultadocalculadora").innerHTML = "Calorias para mantenimiento: " + resultado;
        document.getElementById("resultadocalculadora").style.display = "block";
    }
}

/**
 * Funcion que junta todas las funciones de guardar en LS los musculos seleccionados
 * @method localStorageMusculos
 * @return
 */
let localStorageMusculos = () => {
    guardarPectorales();
    guardarHombros();
    guardarTriceps();
    guardarBiceps();
    guardarAbdominales();
    guardarEspalda();
    guardarCuadriceps();
    guardarIsquios();
    guardarGluteos();
    guardarPantorrillas();
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarPectorales
 * @return
 */
let guardarPectorales = () => {
    let checkbox = document.getElementById("pectorales");
    let pectorales;
    if (checkbox.checked) {
        pectorales = document.getElementById("pectorales").value;
        localStorage.setItem("pectoralesLS", pectorales);
    }
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarHombros
 * @return
 */
let guardarHombros = () => {
    let checkbox = document.getElementById("hombros");
    let hombros;
    if (checkbox.checked) {
        hombros = document.getElementById("hombros").value;
        localStorage.setItem("hombrosLS", hombros);
    }
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarTriceps
 * @return
 */
let guardarTriceps = () => {
    let checkbox = document.getElementById("triceps");
    let triceps;
    if (checkbox.checked) {
        triceps = document.getElementById("triceps").value;
        localStorage.setItem("tricepsLS", triceps);
    }
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarBiceps
 * @return
 */
let guardarBiceps = () => {
    let checkbox = document.getElementById("biceps");
    let biceps;
    if (checkbox.checked) {
        biceps = document.getElementById("biceps").value;
        localStorage.setItem("bicepsLS", biceps);
    }
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarAbdominales
 * @return
 */
let guardarAbdominales = () => {
    let checkbox = document.getElementById("abdominales");
    let abdominales;
    if (checkbox.checked) {
        abdominales = document.getElementById("abdominales").value;
        localStorage.setItem("abdominalesLS", abdominales);
    }
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarEspalda
 * @return
 */
let guardarEspalda = () => {
    let checkbox = document.getElementById("espalda");
    let espalda;
    if (checkbox.checked) {
        espalda = document.getElementById("espalda").value;
        localStorage.setItem("espaldaLS", espalda);
    }
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarCuadriceps
 * @return
 */
let guardarCuadriceps = () => {
    let checkbox = document.getElementById("cuadriceps");
    let cuadriceps;
    if (checkbox.checked) {
        cuadriceps = document.getElementById("cuadriceps").value;
        localStorage.setItem("cuadricepsLS", cuadriceps);
    }
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarIsquios
 * @return
 */
let guardarIsquios = () => {
    let checkbox = document.getElementById("isquios");
    let isquios;
    if (checkbox.checked) {
        isquios = document.getElementById("isquios").value;
        localStorage.setItem("isquiosLS", isquios);
    }
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarGluteos
 * @return
 */
let guardarGluteos = () => {
    let checkbox = document.getElementById("gluteos");
    let gluteos;
    if (checkbox.checked) {
        gluteos = document.getElementById("gluteos").value;
        localStorage.setItem("gluteosLS", gluteos);
    }
}

/**
 * Funcion que si detecta si el checkbox del musculo esta marcado y si es asi lo guarda en el local storage
 * @method guardarPantorrillas
 * @return
 */
let guardarPantorrillas = () => {
    let checkbox = document.getElementById("pantorrillas");
    let pantorrillas;
    if (checkbox.checked) {
        pantorrillas = document.getElementById("pantorrillas").value;
        localStorage.setItem("pantorrillasLS", pantorrillas);
    }
}
