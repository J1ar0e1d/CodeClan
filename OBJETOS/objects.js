// los objetos son basicamente entidades que componen JS como tal
// pero sin adelantarnos mucho a los hechos entiendase que un objeto es visto 
// como una variable que aloja varios elementos a la vez
// para acceder a los elementos de un objeto y trabajar con los mismos se hace de las siguientes formas:



//este es un objeto que se compone de valores en pares dados de la siguiente forma:
// key (ingles para nombre) seguido por dos puntos y luego el valor
const armasCapellan  = {

     tormento: 'programas_dificiles',
     burla: 'programas_aparentemente_faciles',
     ejercicios: 10,
     metodos: function() {console.log('eso ta mal O se puede hacer de una manera mas facil')}
     


};

// primera forma de acceder a un elemento de un objeto
console.log(armasCapellan.tormento);


// anadiendo un elemento nuevo al objeto


armasCapellan.intimidacion = 'procede_a_mirar_la_tarea_por_tiempo_prolongado';



// let x = armasCapellan[ejercicios];





// segunda forma de acceder a un elemento de un objeto
console.log(armasCapellan[burla]);





// tercera forma de acceder a los elementos de un objeto, usando un bucle for:


for (y = 0; y < armasCapellan.length; y++) {

    console.log(armasCapellan(y));


}


