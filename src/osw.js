/*
    String.prototype.split() divide un objeto de tipo String en un array mediante la separacion de la cadena en subcadenas.
*/

/**
 * La funcion divideNumbers tiene un parametro 'string'. En el paso 1 llamamos al metodo split argumentado con un caracter "+" y lo guardamos en una variable result. El paso 2 muestra la cantidad de string que fueron retornados usando la propiedad length. El paso 3 itera para recorrer el string convertido en array y devolver cada objeto por separado y mostrarlo en consola.
 *
 * @param { string } string - string de números.
 * 
 */
function divideNumbers(string){

   
   // step 1
   var result = string.split("+")
   
   
   // step 2
   console.log("Hay " + result.length + " elementos")
   
   // step 3
   for (var i = 0; i < result.length; i++) {
      console.log("objeto por separado:  " + result[i])
   }
}

/** @type {string} */
var decenas = "10+20+30+40+50"

divideNumbers(decenas)



