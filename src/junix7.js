/**Yo elegí el método: Array.prototype.sort()
*Por que: ordena los elementos de un arreglo (array) 
localmente y devuelve el arreglo ordenado. */




/**
 * Esta funcion itera un array de objetos, ordena y devuelve el elemento.
 *
 * @param { Array } a - parametro 1.
 * @param { Array } b - parametro 2.
 * @return { Object } Retorna el objeto donde se ordena el array.
 */


var arr = ['80', '9', '700', 40, 1, 5, 200];
function comparar(a, b) {
  return a - b;
}
console.log('original:', arr.join());
console.log('ordenado sin función:', arr.sort());
console.log('ordenado con función:', arr.sort(comparar));
