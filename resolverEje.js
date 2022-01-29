/* 1) Programa una función que cuente el número de caracteres de una cadena
de texto, pe. miFunción("Hola Mundo") devolverá 10 */
//Tu codigo va Aqui

//     function contarcaracteres(cadena = "Hola Mundo"){
//       if(!cadena){
//             console.warn("No ingresate ninguna cadena")
//       }else{
//             console.info(`la cadena ${cadena} , tiene ${cadena.length} carcateres.`)
//       }
// }
// contarcaracteres();
// ---------------------------------------------------------------------------------------------
// const contarcaracteres = (cadena = "Hola Mundo")=>
// (!cadena)
// ? console.warn("No ingresate nada")
// : console.info(`la cadena ${cadena} , tiene ${cadena.length} carcateres.`)
//  contarcaracteres();

/* 2) Programa una función que te devuelva el texto recortado según el número de
caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
//Tu codigo va Aqui
//texto.substring(4,0)
//      const recorte = (texto = "", longitud = undefined)=>
//       (!texto)
//       ? console.warn("No ingresate ninguna cadena de texto")
//       :(longitud === undefined)
//       ? console.warn("No ingresate la longitud para recortar el texto")
//       : console.info(`la cadena de texto ${texto} , imprime las primeras 4 posiciones y queda `,texto.slice(0, longitud))
//       recorte("Hola Mundo",4);
//       recorte()
//       recorte("Hola Hola")
//       recorte("",5)

/* 3) Programa una función que dada una String te devuelva un Array de textos separados
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
//Tu codigo va Aqui
//      function devolverArray(){
//           let texto = "hola que tal";
//           let textoSeparado = texto.split(" ");
//           return textoSeparado ;
//       }
// console.log(devolverArray());

// const devolverArray = (texto = "" ) =>
//       (!texto)
//        ? console.warn("No has ingresado ningun caracter")
//         : console.info(texto.split(" "))
//      devolverArray("Hola que tal")

/* 4) Programa una función que repita un texto X veces,
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
//Tu codigo va Aqui
//      function repe(){
//         let texto = "Hola Mundo ";
//         let palabra = texto.repeat(3);
//         return palabra;
//       }
// console.log(repe());

// const repetirTexto = (texto = "", veces = undefined) =>{
//       if(!texto) return console.warn("No has ingresado ningun texto y/o el 0 no se considera texto");

//       if(veces === undefined) return console.warn("No has ingresado las veces a repetir");

//       if(veces === 0) return console.error("El numero de veces no puede ser 0 'Cero'");

//       if(Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");

//       for(let i = 1; i <= veces; i++) console.info(`${texto},${i}`);
// }

// repetirTexto("&&&",2);

//-------------------------------------------------------------------------

/* 5) Programa una función que invierta las palabras de una cadena de texto, 
    pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
//Tu codigo va Aqui
// function invertir(texto){

//       return texto.split("").reverse().join("");
// }

//      console.log(invertir("Hola Mundo"));
//      const invertir = (texto = "")=>
//             (!texto)
//             ? console.warn("No has ingresado un texto")
//             : console.log(texto.split("").reverse().join(""))
//      invertir("voy tener mucho dinero");

/* 6) Programa una función para contar el número de veces que se repite una 
    palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") 
    devolverá 2 */
// Tu codigo va Aqui
//        function contar(){
//      let cadena = "hola mundo adios mundo";
//       let expReg2 = new RegExp("mundo","ig");
//      console.log(expReg2.exec(cadena))
//        }
//        contar();

// const contarTextoEnCadena = (cadena = "", texto = "") => {
//   if (!cadena) return console.log("No ingresaste un texto largo!.");

//   if (!texto) return console.log("Te falto ingresar el texto a buscar!");

//   let i = 0,
//     contador = 0;
//   while (i !== -1) {
//     i = cadena.indexOf(texto, i);
//     //if (i !== -1) {
//       i++;
//       contador++;
//    // }
//   }//fin while
//   return console.info(`La palabra ${texto} se repite ${contador} veces`);
// }//fin funcion
// contarTextoEnCadena();
// contarTextoEnCadena("","mundo");
// contarTextoEnCadena("Hola mundo adios mundo");
// contarTextoEnCadena("Hola mundo adios mundo","mundo");

/* 7) Programa una función que valide si una palabra o frase dada, es un 
    palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") 
    devolverá true */
//Tu codigo va Aqui
//   function palindrome(str){
//         let palabra = str.split("").reverse().join("");
//         //return palabra === str ? true : false;
//         palabra = palabra.toLowerCase();
//         if (palabra === str) {
//               return true
//         }else{
//               return false
//         }
//   }
//   console.log(palindrome("salas"));
// const palindrome = (palabra = "")=>{
// if(!palabra){return console.error("No has ingresado una palabra")}
// else if(palabra >=0 || palabra >=1) {return console.error("Esto es un numero ingresa una palabra ")}
// palabra = palabra.toLocaleLowerCase();
// let alReves = palabra.split("").reverse().join("");
// return (alReves === palabra)
// ? console.log(`la palabra ${palabra} es palidrome, al reves queda así ${alReves}`)
// : console.log(`La palabra ${palabra}, no es palindome`)
// }

// palindrome("oao")

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto 
    dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  
    "1, 2, 3, 4 y 5 */
//Tu codigo va Aqui
//   function elimine(){
//   var frase = "xyz1, xyz2, xyz3, xyz4 y xyz5";
//   frase3 = frase.replace(/[xyz]/gi,'');
//   console.log(frase3)
//   }
//   elimine()
// const eliminarCaracteres = (texto = "", patron = "") =>
//       (!texto)
//             ? console.warn("No has ingresado un texto")
//             : (!patron)
//                   ? console.warn("No has ingresado un patron de caracteres")
//                   : console.info(texto.replace(new RegExp(patron, "ig"),""))

//                   eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */
//Tu codigo va Aqui
// function aleatorio(max, min){
// let numero =  Math.round(Math.random()* (max - min) + min);
// return numero
// }
// console.log( aleatorio(501, 600))

// const aleatorio = ()=> console.info((Math.round(Math.random()*100)))
// aleatorio()

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no
    (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */
//Tu codigo va Aqui
// const capicua = (numero = 0) => {
//   if (!numero) return console.warn("No ingresaste un numero");

//   if (typeof numero !== "number")
//     return console.log(`El valor ${numero} ingresado no es un numero`);

//   numero = numero.toString();
//   let alReves = numero.split("").reverse().join("");
//   return (numero === alReves)
//     ? console.log(`El numero ${numero} si es capicua`)
//     : console.log(`El numero ${numero} no es capicua`);
// };
// capicua(123.321);

//   String.prototype.reverse = function (){
//       this.split("").reverse().join("");
//   }
//   function capicua(palabra){
//         var invPalabra = palabra.reverse();
//         if (palabra === invPalabra) {
//               return true;
//         }else{
//               return false;
//         }
//   }
//   console.log(capicua(1881));
//Definimos un metodo para el tipo de datos "string", que lo unico que
// hace es devolver nuestra palabra en orden inverso.
//    function datos(txt1){
//        var centena = 0; decena = 0, unidad = 0;

//        centena = Math.floor(txt1 / 100);
//        decena = Math.floor((txt1 % 100) / 10);
//        unidad = Math.floor((txt1 % 100) % 10);
//       if(centena === unidad){
//             console.log(true)
//       }else{
//             console.log(false)
//       }
//    }
//    datos(181)

// function num(numero){
//       let numero1 = Number(numero.split("").reverse().join(""));
//     if(numero1 === numero){
//       console.log(true);
//     }else{
//       console.log(false);
//     }
// }
//       num(1871);
//----------------------------------------------------------------------------------

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo
       n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. 
       miFuncion(5) devolverá 120 
       Tu codigo va Aqui*/

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No has ingresado un numero");

  if (typeof numero !== "number")
    return console.error(`El valor ingresado "${numero}" no es un número`);

  if (numero === 0) return console.error("El numero no puede ser cero");

  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
        factorial *= i;
  }
  return console.log(`El factorial de ${numero} es ${factorial}`)
};
factorial(5);
