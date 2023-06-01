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
        resultado = 655+(9.6*_peso)+(1.8*_altura)-(4.7*_edad);
    } else if (_sexo === "masculino") {
        resultado = 66+(13.7*_peso)+(5*_altura)-(6.75*_edad);
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