/**
 * Funcion que calcula las calorias de mantenimiento de una persona
 * @method calcularCalorias
 * @param
 * @return
 */
const calcularCalorias = () => {
    let resultado;
    const _sexo = String(document.getElementById("sexo").value);
    const _altura = Number(document.getElementById("altura").value);
    const _edad = Number(document.getElementById("edad").value);
    const _peso = Number(document.getElementById("peso").value);

    if (_sexo === "femenino") {
        resultado = (10 * _peso) + (6.25 * _altura) - (5 * _edad) - 161;
    } else if (_sexo === "masculino") {
        resultado = (10 * _peso) + (6.25 * _altura) - (5 * _edad) - 5;
    }

    if (_edad === 0 || _peso === 0 || _altura === 0) {
        alert("Debe completar los campos");
    } else {
        document.getElementById("resultadocalculadora").innerHTML = "Calorias para mantenimiento: " + resultado;
        document.getElementById("resultadocalculadora").style.display = "block";
    }

}