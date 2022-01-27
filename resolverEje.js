/* 1) Programa una función que cuente el número de caracteres de una cadena
de texto, pe. miFunción("Hola Mundo") devolverá 10 */
      //Tu codigo va Aqui

      function miFuncion(palabra){
               return palabra.length;
            }
       console.log(miFuncion("Hola Mundo"));

/* 2) Programa una función que te devuelva el texto recortado según el número de
caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
      //Tu codigo va Aqui
      /*let texto = "Hola Mundo";
      function recorte(){
        return texto.substring(4, 0);
      }
      console.log(recorte());*/

/* 3) Programa una función que dada una String te devuelva un Array de textos separados
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
      //Tu codigo va Aqui
     /* function devolverArray(){
          let texto = "hola que tal";
          let textoSeparado = texto.split(" ");
          return textoSeparado ;
      }
console.log(devolverArray());*/

/* 4) Programa una función que repita un texto X veces,
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
      //Tu codigo va Aqui
/*      function repe(){
        let texto = "Hola Mundo ";
        let palabra = texto.repeat(3);
        return palabra;
      }
console.log(repe());*/
//-------------------------------------------------------------------------

    /* 5) Programa una función que invierta las palabras de una cadena de texto, 
    pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
              //Tu codigo va Aqui
            // function invertir(texto){
                  
            //       return texto.split("").reverse().join("");
            // }
                  
            //      console.log(invertir("Hola Mundo"));
           

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

    /* 7) Programa una función que valide si una palabra o frase dada, es un 
    palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") 
    devolverá true */
              //Tu codigo va Aqui
            //   function palindrome(str){
            //         let palabra = str.split("").reverse().join("");
            //         //return palabra === str ? true : false;
            //         if (palabra === str) {
            //               return true
            //         }else{
            //               return false
            //         }
            //   }
            //   console.log(palindrome("salas"));


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
    /* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */
              //Tu codigo va Aqui
                  // function aleatorio(max, min){
                  // let numero =  Math.round(Math.random()* (max - min) + min);
                 
                  // return numero
                  // }
                  // console.log( aleatorio(501, 600))

    /* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
    (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */
              //Tu codigo va Aqui
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