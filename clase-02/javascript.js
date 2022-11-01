

// for

for(let i = 0; i <= 10; i++){
    console.log(i)
}

let palabra = "corral"


for(let i = palabra.length - 1; i >= 0; i--){
    console.log(palabra[i])
}

// Halla la media
let notas = [7, 3, 6, 9, 6, 5, 7]
let total = 0

for(let i = 0; i < notas.length; i++){
    total += notas[i]
}

console.log(total / notas.length)

// Ejercicio for 

let nombre = "Illita"

console.log(`Hola ${nombre}`)

// Haz un for que salude mediante un console.log a todos los nombres del array
let personas = ["Nuria", "Lucia", "Miguel", "Marta", "Juanpe"]


// Haz un for que salude por su nombre a cada uno de los perros y le diga su edad mediante un console.log
let perros = [
    {
        name: "Bonito",
        age: 3
    },
    {
        name: "Illita",
        age: 2
    },
    {
        name: "Salchicha",
        age: 1
    }
]

for(let i = 0; i < perros.length; i++){
    console.log(`Hola ${perros[i].name}, tienes ${perros[i].age} años `)
}


function saludo(){
    console.log("Hola buenos días")
}

saludo()

function saludar(nombre, edad){
    return `Hola ${nombre}, tienes ${edad} años`
}

let container = saludar("Illita", 3)
saludar("Ternasco", 7)

console.log(saludar("Illita", 3))


const buen_dia = (name)=>{
    console.log(`Hola ${name}`)
}

// for
    // Haz una función que reciba como parámetro un string y devuelva mediante un console.log() cada uno de los caracteres
    // Parámetros: 
    const speller = ()=>{

    }

    // Ahora haz que haz una función igual que la anterior pero que reciba un parámetro adicional, un booleano (true o false). Si es true entonces se deletrea el string de manera normal pero si es false se deletrea desde atrás hacia delante.
    // Parámetros: hola, false -> a - l - o - h.

    const proSpeller = ()=>{

    }


// .length()
    // 1. Haz una función que reciba como parámetro un string o un array y que devuelva el número de caracteres del mismo.

    const characterCount = ()=>{
        
    }


// .toLowerCase() / .toUpperCase()
    // 2. Haz una función que reciba como parámetro un string y lo devuelva convertido en mayúsculas

    const upperCase = ()=>{
        
    }

    // 3. Haz una función que reciba dos parámetros string, y devuelva el primero convertido a lowerCase, el segundo convertido a upperCase y ambos unidos
    // parámetros: HOLA, mundo -> return: holaMUNDO

    const unionFunction = ()=>{
        
    }

// .repeat()
    // 4. Haz una función que reciba dos parámetros: un número y un string. El número será las veces que se debe repetir el string introducido como segundo parámetro.
    // parámetros: 3, silla -> return: silla silla silla

    const repeating = (number, str)=>{
        return str.repeat(number)
    }


// .trim()
    // 5. Haz una función que tome como parámetro un string y devuelva el mismo string pero eliminando los espacios anteriores y posteriores si los tuviera

    const trimer = ()=>{
        
    }

// .slice()
    // 6. Haz una función que reciba tres parámetros: un string y dos números. La función debe devolver el string cortado por los números indicados como segundo y tercer parámetro.
    // Ahora verifica si hay tercer parámetro, si no lo hay el slice se hará solo con un número. (cláusula guardia)

    const cortador = ()=>{
        
    }


module.exports = {
    cortador,
    trimer,
    repeating,
    unionFunction,
    upperCase,
    characterCount
}
