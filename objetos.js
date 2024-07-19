
let telefonos = {
    tel_1: "4540157",
    tel_2: "2764578",
}
console.log("numeros_tel", telefonos);

let objpersona_1 = {
    nombre: "andres",
    apellido: "hernadez",
    email: "anhernadez",
    telefono: telefonos,

}

let objpersona_2 = {
    nombre: "maria",
    apellido: "yepes",
    email: "mpyepes",
    telefono: telefonos,

}

let objpersona_3 = {
    nombre: "juan",
    apellido: "sierra",
    email: "jusierra",
    telefono: telefonos,

}

let personas = [objpersona_1, objpersona_2, objpersona_3];
personas.forEach(objpersona => {
    console.log(objpersona.nombre)
    
});


function agregarpersonas(objpersona){
    if( objpersona.nombre != null 
        && objpersona.apellido != null 
        && objpersona.email != null 
        && objpersona.telefono != null){
        personas.push(objpersona)
    }
}
let objpersona_4 = {
    nombre: "henry",
    apellido: "galvis",
    email: "henry",
    telefono: telefonos,

}

agregarpersonas(objpersona_4);
console.log(personas);

function crearobjeto (nombre, apellido, email, telefono){
    let objpersona ={
        nombre,
        apellido,
        email,
        telefono,
    }
    return objpersona
    
}
let objpersona = crearobjeto("andres", "goez", "goez@", "4540157");
personas.push(objpersona);
console.log(personas);




