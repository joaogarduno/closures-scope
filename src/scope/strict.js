// STRICT MODE (Modo Estricto)

// Fue incorporado en ECMAScript 5 y nos permite a nosotros ejecutar de forma estricta unas reglas particulares para tener mucho mejor control de la asignacion de las variables y algunos elementos claves para que nuestro codigo cumpla con el mayor de los estandares.
// Recordar que nuestro codigo que podamos estar creando dentro de javascript puede estar listo o esperando una logica que no sea de forma correcta.

// donde entra ese concepto de Strict Mode.

// vamos a utilizar una variable que no voy a declarar si no que se pasara directamente a asignar
pi = 3.1416
console.log(pi);
// Recordar que solo hemos asigando el valor sin pasar por la declaración (esto tiene relacion con el tema del hosting y la elevacion de las variables)

// Entonces... que es lo que sucede podemos entender que cuando queremos ejecutar el codigo anterior nos muestra ese resltado 3.1416, pero.. ¿que sucedio?, ¿Qué hizo Javascript para leer el codigo y mostrarlo?
// Porque cuando solamente estamos asignado el valor Javascript entiende que se declaro la variable ejemplo:
    // var pi; // undefined
// Se asigno como "undefined" y luego se asigno o reasigno ya el valor y se mostro. Esto es lo que pudo interpretar Javascript

// Y a la hora de hacer el recorrido ejecuta el codigo, pero...


// --------------------------------
// Que pasa si ahora yo le digo NO entres en ese juego y usemos el modo avanzado dentro de Javascript
'use strict';
pi = 3.1416
console.log(pi);


// Esto significa que aqui ya no vamos estar haciendo el uso del hosting que es la elevacion de las variables en tiempo de compilacion, etc, etc.
// Si no que tenemos que asignar y declar al mismo tiempo o declararla y luego reasignarla para poderla usar.
// Y aqui es donde entra el concepto del modo estricto y esto es simplemente para mostrarlo en lo que vendria siendo una variable.

// --------------------------------
// Pero tambien podemos hacer uso de esto dentro de una funcion
function myFunction(){
    'use strict';
    return pi = 3.1416
}
console.log(myFunction());
// Y vemos que volvemos a tener el mismo error que el anterior.
// Asi que hay que tener cuidado cuando estemos haciendo este tipo de cosas porque es probablemente que si no tiene ese valor ('use strict') vamos a verlo y puede que estemos haciendo logicas que puedan llevar a flujo extraños en nuestra aplicacion.

// Entonces... activar esta opcion, ya va hacer que cumplamos con el objetivo clave y que tambien estemos listos para que en el futuro cada actualizacion pues estemos pensando en que nuestro codigo siempre va a tener este concepto de seguridad y que va estar mucho mejor pensado a la hora de escribir nuestro software.

// Recordar que Javascript es muy bien utilizado en muchos programas y en mucha de la logica de internet


