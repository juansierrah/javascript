//let tiene un alcance local
let numero_1 = 1;
// var tiene un alcance global
var cadena = "hola mundo"
//cosntante
const numero_2 = 2

numero_1 = 5;
cadena = "hola mundo";


// mostrar mensajes en cosnsolas
console.log(cadena);
console.error("estos es un error");
console.table({nombre:"andres"});
// if estrucuturas de decicion
console.log("------if estrucuturas de decicion--------");
if(numero_1 > numero_2){
    console.log("numero 1 es mayor")
}
else{
    comsole.log("numero 2 es mayor")
}
let numero_3 = 10;
let numero_4 = 5;
//and
console.log("------AND--------");
if(numero_1 > numero_2 && numero_3 > numero_4){
    console.log("cumple");
}else{
    console.log("no cumple");
}
//or
console.log("----OR----------");
if(numero_1 > numero_2 || numero_3 > numero_4){
    console.log("cumple");

}else{
    comsole.log("no cuemple");
}

// ciclos
console.log("------ciclos--------");
// for
for(let i = 0; i < 10; i++){
    console.log(i);

}
//while
console.log("------while--------");
let contador = 0
while(contador < 5){
    console.log(contador);
    ++contador;
}
// imprimir todos los numeros pares del 1 al 100
console.log("------ejercicio pares--------");
for(let i = 0; i <= 100; ++i)
    if(i%2 ==0){
        console.log(i)
    }
console.log("-----------arreglos---------")
let numeros = [];
console.log("numeros-->" , numeros);
numeros.push(10);
numeros.push(20);
numeros.push(30);
console.log("numeros-->" , numeros);
//quitar numeros
numeros.pop();
console.log("numeros-->" , numeros);

let frutas = [manzana , pera , melocoton]
nuevoarreglo = []

for(i = 0; i < numeros.length; ++i){
    if(numeros[i] != 20){
        nuevoarreglo.push(numeros[i])
    
        }
    }
    
console.log("nuevoarreglo" , nuevoarreglo)

    


