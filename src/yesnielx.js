/*
    Array.prototype.find()
    Este método devuelve el valor del primer elemento del array que cumple la función proporcionada.
*/

/**
 * Esta funcion itera un array de objetos, encuentra y devuelve el elemento encontrado.
 *
 * @param { Array } array - array de objetos.
 * @param { String } fruit - Fruta que deseas buscar
 * @return { Object } Retorna el objeto donde se encuentra la fruta
 */
function findFruit(array, fruit) {
  const findFruit = array.find(
    (element) => element.name.toLowerCase() === fruit.toLowerCase()
  );
  if (findFruit) {
    return findFruit;
  } else return "Ha ocurrido un error al encontrar el elemento";
}

const array = [
  {
    name: "Manzana",
    amount: 2,
  },
  {
    name: "Aguacate",
    amount: 4,
  },
  {
    name: "Bayas",
    amount: 6,
  },
  {
    name: "Fresas",
    amount: 8,
  },
  {
    name: "Kiwi",
    amount: 10,
  },
];

console.log(findFruit(array, "Fresas"));
