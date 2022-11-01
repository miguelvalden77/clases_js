
// Declaración de variables: let & const

let example_number = 10
example_number = 12

const name_person = "Miguel"
// name_person = "Pepe"

console.log("Hola")

/*
Tipos de datos
*/

// String
    let objeto = "Lapiz"

// Number
    let numero = 6

// Booleano
    let bool = false

// Array 
    let arr = [true, 8, "Hola"]

// Object
    let person = {
        name: "Juan",
        age: 28,
        active: false,
        padre: {
            name: "Pepe"
        }
    }

    console.log(person.padre.name)


/*
Operadores aritméticos
*/

// +, -, *, /, %


/*
Operadores lógicos
*/

// &&, ||


/*
Condicionales
*/

// if, else if, else, switch

let ana = {
    age: 17,
    autorizacion: true
}

if(ana.age < 18 && ana.autorizacion === false){
    console.log("No entras")
} else{
    console.log("Puedes entrar")
}

let number = 1.5

if(number % 2 === 0){
    console.log(`${number} es par`)
} else if(number % 2 === 1){
    console.log(`${number} es impar`)
} else{
    console.log("Ni idea")
}

let personaje = "fuerte y comiló"

switch(personaje){

    case "verde y listo":
        console.log("Eres picolo")
        break;
    
    case "pequeño y calvo":
        console.log("krilin")
        break;

    case "fuerte y comilón":
        console.log("goku")
        break;

    default:
        console.log("No sé quien eres")

}