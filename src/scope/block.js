// BLOCK SCOPE

// Entender los conceptos de "var", "let" y "const"

// Este concepto se introdujo en ECMAScript 6, nace el concepto de Block Scope
// El alcance de bloque significa que las variables definidas dentro de un bloque solo pueden ser utilizadas dentro de este bloque

// Entonces... las variables definidas dentro de un bloque solo pueden ser utilizadas dentro de este bloque.
// Y vamos a utilizar Let y Const para este concepto en particular.
// Y Var para cuando queramos acceder durante todo los elementos o contextos que necesitemos.

// Como lo venimos haciendo con Global, aunque hay que tener mucho cuidado a la hora de asignar este tipo de variables globales porque podemos volverlas a reasignar y cometer errores que pueden hacer que toda nuestra aplicacion deje de funcionar y por ello hay que tener mucho cuidado

// En este concepto se pretender dejar de utilizar el concepto de "Var" para pasar a utilizar "Let" y "Const"
function fruits(){
    // Lo primero que debemos hacer es definir un BLOQUE y ¿Qué es un bloque? casi, cualquier cosa que este dentro de llaves {}
    //  Todo lo que definamos dentro de las llaves va a ser un BLOQUE.

    // Creamos un if y este if lovamos a validar a verdadero y luego creamos un bloque.
    // Entonces podemos decir que si no estamos definiendo una funcion per si estamos definiendo un elemento de logica como lo seria un "if" para hacer una validacion y se esta abriendo en este caso con handerbars {}, iniciar una secuencia consecuente de la validacion, bueno ahi es donde tenemos un "bloque"
    if (true){
        // Entonces lo que vamos hacer es definir unas variables para saber si podemos acceder a ellas o no
        var fruit1 = 'Apple'; // Function Scope
        let fruit2 = 'Kiwi'; // Block Scope
        const fruit3 = 'Banana'; // Block Scope
        // tenemos nuestras 3 variables declaradas

        // Ahora... si las declaramos dentro del bloque si las puedo mostrar
        console.log(fruit2);
        console.log(fruit3);
    }
    
    // ¿Que pasa si yo quiero que, fuera de este bloque del "if" acceder a ella, a esa variables?
    console.log(fruit1);
    // console.log(fruit2); 
    // console.log(fruit3);

    // Block Scope, se agrega en la actualizacion de ECMAScript 6 donde se agregan estas palabras reservadas Let y Const.
    // Por lo tanto Let y Const solo van a tener en este caso "Block Scope" ese es su alcance

    // Ahora la varible que esta declarada en la linea 13 pasa a tener lo que seria el concepto de "Function Scope"
    // Si puedo acceder dentro de esta misma independientemente que este dentro de un bloque, es por eso que debemos tener mucho cuidado con estos elementos.
    // ¿Por que? porque yo solo quiero utilizar la variable "fruit2" y "fruit3" dentro de ese bloque y no quiero afectar la logica porque es muy probable que mas adelante tenga que hacer alguna logica con un nombre similar o una variable que puede que no me di cuenta y le ponga el mismo nombre y pueda romper mi programa
}
fruits();
// Con todo este concepto lo que se pretende es dejar de utilizar Var a la hora de declarar una varible