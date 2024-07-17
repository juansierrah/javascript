
//-----------funciones-----------//

function sumar(num_1, num_2){
   
    let suma = num_1 + num_2;
    return suma;
}
//lamar suma
let suma_1 = sumar(1, 5);
let suma_2 = sumar(2, 10);
let suma_3 = sumar(10, 8);

console.log("suma_1:", suma_1, "/nsuma_2:", suma_2, "/nsuma_3:", suma_3);

// funciones flechas
const multiplicar = (numero_1, numero_2)=>{
    return numero_1 * numero_2;

}
console.log(multiplicar(2, 10));

function funcion_orden_superior(operacion){
    let resultado = operacion(2, 10) + 20;
    console.log("resultados", resultado);
}
funcion_orden_superior(multiplicar); 

// ejercicio

function crear_operacion(operador) {
    let operacion;
    if(operador == '/') {
        operacion = (numero_1, numero_2)=>{
            return numero_1 / numero_2
        }
    }else if(operador =='*'){
        operacion = (numero_1, numero_2)=>{
            return numero_1 * numero_2
        }
    }
    return operacion;
}

let operacion = crear_operacion('*');
let resultado = operacion(2, 5);
console.log(resultado)
