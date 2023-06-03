/**
 * Calcula las calorias de mantenimiento de una persona
 * @method calcularCalorias
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

    if (_edad <= 0 || _peso <= 0 || _altura <= 0 || _peso > 700 || _altura > 300) {
        alert("Ingrese valores validos");
        document.getElementById("altura").value='';
        document.getElementById("edad").value='';
        document.getElementById("peso").value='';
    } else {
        resultado= Math.round((resultado) * 100) / 100;
        document.getElementById("resultadocalculadora").innerHTML = "Calorias para mantenimiento: " + resultado;
        document.getElementById("resultadocalculadora").style.display = "block";
    }
}

/**
 * Guarda los musculos seleccionados en forma de arreglo en el localstorage
 * @method guardarMusculos
 */
let guardarMusculos = () => {
    let arrayMusculos = [];
    let checkPectorales = document.getElementById("pectorales");
    let checkHombros = document.getElementById("hombros");
    let checkTriceps = document.getElementById("triceps");
    let checkboxBiceps = document.getElementById("biceps");
    let checkboxAbdominales = document.getElementById("abdominales");
    let checkboxEspalda = document.getElementById("espalda");
    let checkboxCuadriceps = document.getElementById("cuadriceps");
    let checkboxIsquios = document.getElementById("isquios");
    let checkboxGluteos = document.getElementById("gluteos");
    let checkboxPantorrillas = document.getElementById("pantorrillas");
    if (checkPectorales.checked){
        arrayMusculos.push("pectorales");
    }
    if (checkHombros.checked){
        arrayMusculos.push("hombros");
    }
    if (checkTriceps.checked){
        arrayMusculos.push("triceps");
    }
    if (checkboxBiceps.checked){
        arrayMusculos.push("biceps");
    }
    if (checkboxAbdominales.checked){
        arrayMusculos.push("abdominales");
    }
    if (checkboxEspalda.checked){
        arrayMusculos.push("espalda");
    }
    if (checkboxCuadriceps.checked){
        arrayMusculos.push("cuadriceps");
    }
    if (checkboxIsquios.checked){
        arrayMusculos.push("isquios");
    }
    if (checkboxGluteos.checked){
        arrayMusculos.push("gluteos");
    }
    if (checkboxPantorrillas.checked){
        arrayMusculos.push("pantorrillas");
    }

    let cadenaMusculos = JSON.stringify(arrayMusculos);
    localStorage.setItem("musculosLS",cadenaMusculos);
}

/**
 * Asigna ejercicios segun los musculos seleccionados, el nivel y el objetivo
 * @method ejercicios
 */
let ejercicios = () => {
    let nivel = localStorage.getItem("nivelLS");
    let objetivo = localStorage.getItem("objetivoLS");
    let repeticiones;
    let repeticionesHtml = document.getElementsByClassName("repeticiones");
    let cadenaMusculos=localStorage.getItem("musculosLS");
    let arrayMusculos = JSON.parse(cadenaMusculos);

    if (objetivo==="musculo"){
        repeticiones="4 series de 6 repeticiones";
    }
    if (objetivo==="mantencion"){
        repeticiones="4 series de 10 repeticiones";
    }
    if (objetivo==="peso"){
        repeticiones="3 series de 15 repeticiones";
    }
    for (let j=0; j<repeticionesHtml.length; j++){
        repeticionesHtml[j].textContent=repeticiones;
    }

    let num=1;
    for (let i=0; i<arrayMusculos.length; i++){
        if (arrayMusculos[i]==="pectorales"){
            document.getElementById(`nombreejercicio${num}`).textContent = "Press de banca plano";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent = "Flexion de brazos";
            }
            num++;
        }
        if (arrayMusculos[i]==="hombros"){
            document.getElementById(`nombreejercicio${num}`).textContent= "Press de hombros";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent= "Elevaciones laterales";
            }
            num++;
        }
        if (arrayMusculos[i]==="triceps"){
            document.getElementById(`nombreejercicio${num}`).textContent= "Press frances";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent= "Extension de triceps en polea";
            }
            num++;
        }
        if (arrayMusculos[i]==="biceps"){
            document.getElementById(`nombreejercicio${num}`).textContent= "Curl arnold";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent= "Curl de biceps";
            }
            num++;
        }
        if (arrayMusculos[i]==="abdominales"){
            document.getElementById(`nombreejercicio${num}`).textContent= "Elevacion de piernas acostado";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent= "Plancha abdominal";
            }
            num++;
        }
        if (arrayMusculos[i]==="espalda"){
            document.getElementById(`nombreejercicio${num}`).textContent= "Remo unilateral";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent= "Jalon al pecho";
            }
            num++;
        }
        if (arrayMusculos[i]==="cuadriceps"){
            document.getElementById(`nombreejercicio${num}`).textContent= "Sentadilla con barra";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent= "Extension de cuadriceps";
            }
            num++;
        }
        if (arrayMusculos[i]==="isquios"){
            document.getElementById(`nombreejercicio${num}`).textContent= "Peso muerto rumano";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent= "Curl de isquios";
            }
            num++;
        }
        if (arrayMusculos[i]==="gluteos"){
            document.getElementById(`nombreejercicio${num}`).textContent= "Hip thrust";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent= "Patada de gluteos";
            }
            num++;
        }
        if (arrayMusculos[i]==="pantorrillas"){
            document.getElementById(`nombreejercicio${num}`).textContent= "Elevacion de talones en maquina";
            document.getElementById(`ejercicio${num}`).style.display = "block";
            if (nivel==="principiante"){
                document.getElementById(`nombreejercicio${num}`).textContent= "Elevacion de talones";
            }
            num++;
        }
    }
}