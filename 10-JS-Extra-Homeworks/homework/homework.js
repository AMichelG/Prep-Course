// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arr = [];
  for (let i = 0;  i < Object.values(objeto).length; i++) {
    arr.push([Object.getOwnPropertyNames(objeto)[i], Object.values(objeto)[i]]);
  }
  return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
     
  var arr = string.split('');
  // arr.sort();
  // console.log(arr);

  const obj = arr.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arr = s.split('');
  let arrMayus = [];
  let arrMinus = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i].toUpperCase()) {
      arrMayus.push(arr[i]);
      } else if (arr[i] === arr[i].toLowerCase()) {
      arrMinus.push(arr[i]);
    } else {}
  }
  return arrMayus.join('') + arrMinus.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr = str.split(' ');
  let newarr = [];
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('').reverse().join('');
    newarr.push(word);
    }
    // console.log(newarr);
    return newarr.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // console.log(numero);
  var numero2 = numero.toString().split('').reverse().join('');
  if (numero.toString() === numero2) {
    return 'Es capicua';
  } return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 
  let arr = cadena.split('');
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] !== 'a' || arr[i] !== 'b' || arr[i] !== 'c') {
//       newarr.push(arr[i]);
//     };
//  }  return newarr.join('');

// let newarr = arr.filter(a => a != 'a').filter(b => b != 'b').filter(c => c != 'c');
let newarr = arr.filter(x => x !== 'a' && x !== 'b' && x !== 'c');

return newarr.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort((a, b) => a.length - b.length);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let arr = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]) {
        arr.push(arreglo1[i])
      };      
    }
  }
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

