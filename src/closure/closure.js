// En Javasctipt una funcion puede tener otra funcion.
// A esto se le llama una funcion anidada

// En Javascript las Closure proporcionan acceso al ambito lexico.
    // Que era lo que se mencionaba a nivel de como asignamos las variables y como estas son accesibles a nivel de los niveles que tenemos, 

// con esto ahora en mente, vamos a crear la logica necesaria para poder entender como vamos a sacarle provecho dentro de la estructuracion de la "Closure"

// Creamos una funcion "Saludar()"
function greeting(){
    let userName = 'Joao';

    // Ahora vamos a crear una funcion que se va a llamar "displayUserName"
    // Y lo que queremos hacer aqui es retornar o mostrar el "userName"
    function  displayUserName(){
        return `Hello ${userName}`;
    }
    return displayUserName;
}

// No olvidar que tambien se habla de que, "recuerda el contexto" o "accede al contexto", vamos a empezar a trabajar como ejecutariamos lo que vendria siendo esta "closure" y como le vamos a sacar ventaja.


// generamos una constante
const g = greeting();
console.log(g);
console.log(g());

// Para entender que es lo que esta pasando:
    // En el llamado de "console.log(g)" estamos retornando la funcion, es decir la definicion que tiene en este caso "displayUserName"
    // Y cuando la ejecutamos nos esta entregando el valor que en este caso es "Hello Joao" con lo cual esta accediendo a este ambito lexico pero tambien esta recordando el contexto


// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------