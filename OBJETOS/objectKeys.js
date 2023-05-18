// Crear una función que tome un objeto y devuelva un array con sus claves.
// Dada la entrada { a: 1, b: 2, c: 3 } , la salida sería ['a', 'b', 'c']
 
// instanciando clase objects
//  const object2 = new objects(30, 30, 30);



const object2 = {
   
  a: 30,
  b: 30,
  c: 30
 
};


// para imprimir los keys
 function oK (Object) {

   console.log(Object.keys(object2));
   return Object.keys(object2);

}

oK(object2);