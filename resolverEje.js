// /* 1) Programa una función que cuente el número de caracteres de una cadena
// de texto, pe. miFunción("Hola Mundo") devolverá 10 */
// Tu codigo va Aqui

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

// /* 2) Programa una función que te devuelva el texto recortado según el número de
// caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
// Tu codigo va Aqui
// texto.substring(4,0)
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

// /* 3) Programa una función que dada una String te devuelva un Array de textos separados
// por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
// Tu codigo va Aqui
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

// /* 4) Programa una función que repita un texto X veces,
// pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
// Tu codigo va Aqui
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

// -------------------------------------------------------------------------

// /* 5) Programa una función que invierta las palabras de una cadena de texto,
//     pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
// Tu codigo va Aqui
// function invertir(texto){

//       return texto.split("").reverse().join("");
// }

//      console.log(invertir("Hola Mundo"));
//      const invertir = (texto = "")=>
//             (!texto)
//             ? console.warn("No has ingresado un texto")
//             : console.log(texto.split("").reverse().join(""))
//      invertir("voy tener mucho dinero");

// /* 6) Programa una función para contar el número de veces que se repite una
//     palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo")
//     devolverá 2 */
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

// /* 7) Programa una función que valide si una palabra o frase dada, es un
//     palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas")
//     devolverá true */
// Tu codigo va Aqui
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

// /* 8) Programa una función que elimine cierto patrón de caracteres de un texto
//     dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá
//     "1, 2, 3, 4 y 5 */
// Tu codigo va Aqui
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

// /* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */
// Tu codigo va Aqui
// function aleatorio(max, min){
// let numero =  Math.round(Math.random()* (max - min) + min);
// return numero
// }
// console.log( aleatorio(501, 600))

// const aleatorio = ()=> console.info((Math.round(Math.random()*100)))
// aleatorio()

// /* 10) Programa una función que reciba un número y evalúe si es capicúa o no
//     (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */
// Tu codigo va Aqui
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
// Definimos un metodo para el tipo de datos "string", que lo unico que
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
// ----------------------------------------------------------------------------------

// /* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo
//        n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
//        miFuncion(5) devolverá 120
//        Tu codigo va Aqui*/

// const factorial = (numero = undefined) => {
//   if (numero === undefined) return console.warn("No has ingresado un numero");

//   if (typeof numero !== "number")
//     return console.error(`El valor ingresado "${numero}" no es un número`);

//   if (numero === 0) return console.error("El numero no puede ser cero");

//   if (Math.sign(numero) === -1)
//     return console.error("El numero no puede ser negativo");

//   let factorial = 1;

//   for (let i = numero; i > 1; i--) {
//         factorial *= i;
//   }
//   return console.log(`El factorial de ${numero} es ${factorial}`)
// };
// factorial(5);

// /* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
//  o no, pe. miFuncion(7) devolverá true
//       Tu codigo va Aqui*/
//       const numeroPrimo = (numero = undefined ) =>{
//       if(!numero) return console.warn("No has ingresado un numero")

//       if(numero === undefined) return console.warn("Ingresa un numero")

//       if(typeof numero !== "number" ) return console.warn("Ingresa solo un numero")

//       if(numero === 0) return console.error("El cero no es valido ingresa un numero mayor")

//       if(numero === 1) return console.error("El uno no es valido ingresa un numero mayor")

//       if(Math.sign(numero) === -1) return console.error("No se aceptan numeros negativos")

//       let divisible = false;
//       for (let i = 2; i < numero; i++) {
//         if((numero  %i) === 0 )  {
//           divisible = true;
//           break;
//         }
//       }

//       return (divisible)
//       ? console.log(`El numero ${numero} no es primo`)
//       : console.log(`El numero ${numero} es primo`);
//       }

//       numeroPrimo(41)
//       numeroPrimo(53)
//       numeroPrimo(61)
//       numeroPrimo(79)
//       numeroPrimo(83)
//       numeroPrimo(97)

//     13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */
//     const numeroPar = (numero = undefined) =>{
//       if(!numero) return console.log(`Por favor ingrese un numero`)

//       if(numero === undefined) return console.log(`Ingrese un numero`)

//       if(typeof numero !== "number") return console.log(`La opcion ${numero} no es valida`)

//       if((numero %2) === 0) {
//       console.log(`El numero ${numero} es par`)}
//       else { console.log(`El numero ${numero} no es par`)}
//     }
//     numeroPar(53)
//     numeroPar(26)

//     /* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C")
//      devolverá 32°F */

//   const convertirGrados = (grados = undefined, unidad = undefined)=>{
//        if(grados === undefined) return console.warn("No ingresaste grados a convertir")

//        if(typeof grados !== "number") return console.error(`El valor ${grados} no es un numero`)

//        if(unidad === undefined) return console.warn("No ingresaste grados a convertir")

//        if(typeof unidad !== "string") return console.error(`El valor ${unidad} no es una cadena de texto`)

//        if(unidad === "c" || unidad === "f") return console.error(`El valor ${unidad} no es valido solo mayuscula`)

//        if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor invalido, no reconocido")

//     if(unidad === "C"){
//     return console.info(`${grados}°C = ${Math.round((grados*(9/5))+32)}°F`)
//   }else if(unidad === "F"){
//     return console.info(`${grados}°F = ${Math.round(((grados - 32)*(5/9)))}°C`)
//   }
// }
//   convertirGrados(100,"F")
// /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
//     pe. miFuncion(100,2)
//      devolverá 4 base 10 */
// const binarios = (numero= undefined, base = undefined)=>{
//     if(!numero) return console.warn("No ingresaste un numero")

//     if(numero === undefined) return consolel.warn("Ingresa un numero")

//     if(typeof numero !== "number") return console.error("Ingresa solo numeros")

//     if(Math.sign(numero) === -1) return console.error("Ingresa numeros positivos")

//    if(base === undefined) return consolel.warn("Ingresa un numero")

//    if(typeof base !== "number") return console.error("Ingresa solo numeros")

//    if(Math.sign(base) === -1) return console.error("Ingresa numeros positivos")

//    if(base === 2) {
//       return console.info(`El número ${numero} base ${base} = ${parseInt(numero, base)} base 10`) }
//     else if(base===10){
//       return console.info(`El número ${numero} base ${base} = ${(numero.toString(2))} base 2 `)
//     }
//    }
//      binarios(101,2)




// const BinarioADecimal = (num = undefined) => {

//  if(!num) return console.warn("Ingrese un numero")

//   if(num === undefined)return console.info("Ingrese un numero ")

//   if(Math.sign(num) === -1)return console.warn("Ingrese numeros positivos")

  
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += +num[i] * 2 ** (num.length - 1 - i);
//   }
//   console.log(sum);
// };
// BinarioADecimal("10101100");




// /* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad 
// dada, pe. miFuncion(1000, 20) devolverá 800 */
//     const Descuento = (monto = undefined, descuento = undefined)=>{
//       if(!monto) return console.warn("El valor no puede estar vacio")

//       if(!descuento) return console.warn("El descuento no puede estar vacio")

//       if(monto === undefined) return console.warn("Ingrese un valor")

//       if(descuento === undefined) return console.warn("Ingrese un descuento")

//       if(monto < 10 ) return console.warn("Ingrese un valor mayor que se pueda sacar un descuento")

//       if(descuento < 1 ) return console.warn("Ingrese un descuento mayor")

//       if(Math.sign(monto) === -1 || Math.sign(descuento) === -1) return console.error("Solo se admiten valores positivos")

//             let desc = (monto*descuento)/100;
//             let res = monto - desc;
//             console.log(`El monto ingresado es: $ ${monto} menos el descuento del ${descuento}% queda en $ ${res}` )
//     }
//     Descuento(5000,20)



// /* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
// const calcularAnios = (fecha = undefined)=>{
// if(fecha===undefined) return console.warn("No has ingresado fecha")

// if(!(fecha instanceof Date)) return console.error("El valor que ingresate no es fecha valida")

// let hoyMenosFecha = new Date().getTime() - fecha.getTime()
// let aniosEnMS = 1000 * 60*60*24*365
// let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

// return(Math.sign(aniosHumanos) === -1)
// ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
// :(Math.sign(aniosHumanos) === 1)
// ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
// :console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
// }
// calcularAnios();
// calcularAnios({})
// calcularAnios(true)
// calcularAnios(new Date())
// calcularAnios(new Date(1972,9,23))


// /* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
//     pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

//     const contarCadenaTexto = (cadena = "")=> {
//       if(!cadena) return console.log("No ingresate ningun texto")

//       if(typeof cadena !== "string") return console.log("El valor ingresado no es valido")

//      let vocales=0,
//      consonantes=0;

//      cadena = cadena.toLocaleLowerCase();
     
//      for (let letra of cadena) {
//        if(/[aeiou]/.test(letra))vocales++;
  
//        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra))consonantes++;
//      }
//       return console.info({
//         cadena,
//         vocales,
//         consonantes
//       })
//     }
// contarCadenaTexto("Hola mundo")




// /* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
//     devolverá verdadero */
//     const validarNombre = (nombre = "")=>{
//         if(!nombre) return console.warn("Ingrese un nombre");

//         if(typeof nombre !== "string")return console.warn("Ingrese un nombre");
             
//      let expReg = /^[A-Za-zÑñáÁÉÍÓÚéíóú\s]+$/g.test(nombre);
//      return (expReg)    
//      ? console.info(`"${nombre}"Es un nombre valido`)
//      : console.warn(`"${nombre}" No es un mobre valido`) 
//   }                              
//     validarNombre("leonardo rojas")
//     validarNombre(3)
//     validarNombre("leo rojas, 35") 

// /* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") 
//     devolverá verdadero */
//     const validarEmail = (email = "")=>{
//       if(!email) return console.warn("Ingrese un correo");
//       if(email === "")return console.warn("Ingrese uncorreoe");
//       if(typeof email !== "string")return console.warn("Ingrese un correo");
      
//       email = email.toLocaleLowerCase();
//       let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
//       return (expReg)    
//       ? console.info(`"${email}"Es un email valido`)
//       : console.warn(`"${email}" No es unemail valido`) 
//   }
//   validarEmail()
//   validarEmail(34)
//   validarEmail("l,,,ro,@,,,,,,,,")
//   validarEmail("leonardo_rojas-230872@gmail.com")

//   //fusion--------------------------------------------------------------
//   const validarPatron = (email = "",patron="undefined")=>{
//     if(!email) return console.warn("Ingrese un correo");

//     if(typeof email !== "string")return console.warn("Ingrese un correo");

//     if(patron === undefined)return console.warn("No ingresaste un patron a evaluar")

//     if(!(patron instanceof RegExp))return console.error(`el valor ${patron} ingresado, No es una expresion regular`)
    
//     email = email.toLocaleLowerCase();
//     let expReg = patron.test(email);

//     return (expReg)    
//     ? console.info(`"${email}"cumple con el patron ingresado`)
//     : console.warn(`"${email}" No cumple con el patron ingresado`) 
// }

// validarPatron("Leonardo@rojas.com",/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i)

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
    pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. 
    miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero 
    almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
    el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
    pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

/* 26) Programa una función que dado un arreglo de números obtenga el promedio,
     pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

// 27) Programa una clase llamada Pelicula.
//     La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//       - Todos los datos del objeto son obligatorios.
//       - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
//       - Valida que el título no rebase los 100 caracteres.
//       - Valida que el director no rebase los 50 caracteres.
//       - Valida que el año de estreno sea un número entero de 4 dígitos.
//       - Valida que el país o paises sea introducidos en forma de arreglo.
//       - Valida que los géneros sean introducidos en forma de arreglo.
//       - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
//       - Crea un método estático que devuelva los géneros aceptados*.
//       - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
//       - Crea un método que devuelva toda la ficha técnica de la película.
//       - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
//      Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
