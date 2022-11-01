const functions = require("./javascript")


describe("Ejercicio 1", ()=>{

    it("Devuelve el número de caracteres", ()=>{
        expect(functions.characterCount("Cacatua")).toBe(7)
        expect(functions.characterCount("arbol")).toBe(5)
    })

    it("Devuelve un número", ()=>{
        let result = functions.characterCount("Lámpara")
        expect(typeof result).toBe("number")
    })

})

describe("Ejercicio 2", ()=>{

    it("Convierte en mayúsculas el string del parámetro", ()=>{
        expect(functions.upperCase("mesa")).toBe("MESA")
        expect(functions.upperCase("pelota")).toBe("PELOTA")
    })

    it("Devuelve un string", ()=>{
        let result = functions.upperCase("juego")
        expect(typeof result).toBe("string")
    })

})

describe("Ejercicio 3", ()=>{

    it("Devuelve los strings unidos y convertidos a upperCase & lowerCase", ()=>{
        expect(functions.unionFunction("hola", "MUNDO")).toBe("HOLAmundo")
        expect(functions.unionFunction("uno", "DOS")).toBe("UNOdos")
    })

})

describe("Ejercicio 4", ()=>{

    it("Repite el string de acuerdo al número del parámetro", ()=>{
        expect(functions.repeating(3, "pelo ")).toBe("pelo pelo pelo ")
        expect(functions.repeating(2, "hola")).toMatch("holahola")
    })

    it("No modifica el string", ()=>{
        expect(functions.repeating(2, "hola")).toMatch(/hola/)
    })

})

describe("Ejercicio 5", ()=>{

    it("Elimina los espacios al principio", ()=>{
        expect(functions.trimer(" caracol")).toBe("caracol")
    })

    it("Elimina los espacios al final", ()=>{
        expect(functions.trimer("amazing ")).toBe("amazing")
    })

})

describe("Ejercicio 6", ()=>{

    it("Devuelve el trozo de string de acuerdo a los parámetros", ()=>{
        expect(functions.cortador("margarita", 2, 5)).toBe("rga")
    })

    it("Sin tercer parámetro corta el string hasta el final si el segundo parámetro es positivo y viceversa", ()=>{
        expect(functions.cortador("comunidad", 4)).toBe("nidad")
    })

})
