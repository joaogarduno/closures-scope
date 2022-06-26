// FUNCTION SCOPE
function greeting(){
    let userName = 'Ana';
    console.log(userName);

    // Igual en valor y tipo
    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`);
        // Esa variable si puedo ser accedida dentro de la misma funcion y de algun bloque o de alguna funcion anidada adentro de esta funcion
    }
}
greeting();
console.log(userName);
// En este console no podemos tener acceso a esa variable tiene el alcance solamente dentro de la funcion y puede ser transmitida dentro de la logica anidada, como en este caso este el "if" y ser claramente usada dentro de la validacion.
// Pero si yo quisisera por fuera de un bloque de codigo o funcion no es posible

// A este concepto se le conoce como "function scope"

// Entonces que sucede en toda nuestra logica:
    // 1. En la linea 3 asignamos y declaramos nuestra variable
    // 2. Despues se invoca con el "console.log()"
    // 3. Hacemos una validacion
    // 4. Volvemos a invocarla
    // 5. Ejecutamos nuestra logica (la funcion)
    // 6. Y por utimo, cuando quisimos acceder a la variable de la "Funcion" no logramos hacerlo, ¿Por qué?, porque no hay una referencia, no esta asignada como global.

// Si nosotros la asignamos como global claramente podria mostrarse el resultado de ese ultimo "console.log()", pero para cada diferente caso de uso en esta logica, pues va ser claro que vamos a definir variable dentro de una funcion o de alguna logica y con ello poder jugar segun sea necesario

// Entonces... el alcance que va a tener esta variable asignada en la linea 3 solamente va ser dentro de esta funcion 

