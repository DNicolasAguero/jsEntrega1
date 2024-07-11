


let numero1 = parseInt(prompt("Ingrese el primer numero"));
let operacion = prompt("Seleccione la operacion matematica: + SUMA, - RESTA, x MULTIPLICACION, % DIVISION, para salir escriba salir");
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

do {
function calcular(numero, numeroSeg, opcion) {
    switch (opcion) {
        case "+":
            return numero + numeroSeg;
        case "-":
            return numero - numeroSeg;
        case "x":
            return numero * numeroSeg;
        case "%":
            return numero / numeroSeg;
        default:
            alert("Ingresaste una operacion incorrecta")
    }
}

let resultado = calcular(numero1, numero2, operacion);
alert("Resulado: " + resultado);

} while (operacion != "salir")