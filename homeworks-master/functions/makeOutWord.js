function makeOutWord(word, tag) {

 
    let mitadTag = Math.floor(word.length / 2);
    let mitadUno = word.slice(0, mitadTag);
    let mitadDos = word.slice(mitadTag);
    
    
    return mitadUno + tag + mitadDos;
 
 // PRIMER PROTOTIPO
//  let mitadTag = math.floor(tag.lengt / 2); paso 1 pan de arriba
//  let mitadUno = tag.slice(0, mitadTag); paso dos corte del pan (cuchillo)
//  let mitadDos = tag.slice(mitadTag, tag.length - 1); pan de abajo 
//  return mitadUno + word + mitadDos



// SEGUNDO PROTOTIPO
    // let mitadTag = Math.floor(word.length / 2);
    // let mitadUno = word.slice(0, mitadTag);
    // let mitadDos = word.slice(mitadTag);
    // return mitadUno + tag + mitadDos



 
//  tag = tag.half(numero {numero/2});





}


makeOutWord();