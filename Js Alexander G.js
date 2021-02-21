
 /*
 *  String.prototype.replace()
 *  Este método  devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo.
 */

/** 
 * Esta condicion devuelve el valor  de un strings Modificado...
 * @param { String } FoodList -  Lista (String) Que debe ser modificada por contener cosas q no son comida
 
 * @param { String } ModifiFoodList - Lista modificada con solo comida
*/           //Lista No Modificada
       const FoodList = "Meat, Pineaple, Apple, Orange, Fish, Car ";
    
   
   //Lista Original
   let Name = "LISTA ORIGINAL:"
   
    let Espacio = " ";
    
    
    console.log(Name + Espacio + FoodList )
    
     console.log("¡Espacio!");
   
   //Lista Modificada + Console.log
   let ModifiList = FoodList.replace('Car', 'Juice');   
   
   if(ModifiList.length > 0){
   function EditList(list, listModifi){
   list.replace(listModifi)
   console.log(`LA LISTA MODIFICADA ES: ${listModifi}, y ya esta lista`)
   }
   EditList(FoodList, ModifiList )
   }
  
    let NameModifiList = "LA LISTA MODIFICADA:";
     
   
 

   

   
   
   console.log(NameModifiList + Espacio + Car);
   
   
   console.log("¡Espacio!");
   
  //Console.log Lista no Modificada
  let List = "LA LISTA NO MODIFICADA:"
   
   
    
  console.log(List + Espacio + FoodList);
  
  
  //Aunq ciertamente se modifica el string, con el metodo replace, el string original queda totalemente inalterado.....
   
  
