
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

// ejercicio fabrica de funciones

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
console.log(resultado);

// for in range

let numeros = [];
for(i=0; i < 200; i++){
    numeros.push(i)
}

numeros.forEach(element => {
    console.log(element);
    
});

//trasnformar los datos del arreglo

let cambiar = numeros.map( element => element = element * 2);
console.log("cambios", cambiar);
// buscar en el arreglo

let filtrar_arreglo = numeros.filter(element => (element > 150));
console.log("filtros numeros", filtrar_arreglo)

// obtener frutas que inician con la letra

let frutas = ["manzana", "peras", "durazno", "sandia", "piña"];
let frutas_p = frutas.filter( element => (element.charAt(0) == "p")

)
console.log("inicia con p", frutas_p);
