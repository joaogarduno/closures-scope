// Reasignacion y Redeclaracion


var firtName; //undefined // solo declaramos
firtName = 'Joao'; //asignar valor
console.log(firtName);

// --------------------------------
var lastName = 'moterrey'; // Declarar y Asignar
lastName = 'san miguel'; // Reasignar
console.log(lastName);

// --------------------------------
var secondName = 'Calo'; //declarando y asignando
var secondName = 'Frutiano'; // Reasignando
console.log(secondName); // mostramos


// -------------------------------------------------------------------------
// A partir de aqui empiezan a existir reglas que nos van a permitir a nosotros forzarnos o llevarnos por un camino mas seguro a la hora de construir nuestras aplicaciones.

// NOTA: Es muy importante que nuestro codigo  cumpla un standard, que cumpla con esta seguridad de que no se va a romper por algun elemento raro de la logica que yo implemente, por eso existen cada vez y con las actualizaciones que sufren nuestro lenguaje de programacion, son mejoras para lograr ese objetivo.

// --------------------------------
// LET

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // con LET podemos reasignar el valor
console.log(fruit);

// pero que pasaria si yo quiero volver a declarar
let fruit = 'Banana' // no se puede redeclarar una varible dentro del Block Scope
console.log(fruit)
// entonces eso quiere decir que con "Let" NO podemo redeclarar
// Pero... SI podemos Reasignar con "Let", es decir si podemos cambiar el valor


// --------------------------------
// CONST

// Tiene las reglas mas robustas

// asignamos y declaramos
const animal = 'dog'; // declarar y asignar
// animal = 'cat'; // reasignando
// console.log(animal);
// No podemos reasignar variables en CONST

// Entonces si no nos deja reasiganar, probaremos redeclarando
const animal = 'snake';
console.log(animal);


// OTRO EJEMPLO
const vehicles = [];
vehicles.push("carro1");
console.log(vehicles);

// quitar el carro
vehicles.pop()
console.log(vehicles);

// En todo este ejemplo, no estamos reasignando ni redeclando.
// Si no que se esta haciendo es lo siguiente, ya la referencia existe en este caso la linea 55 hacia el valor, que en este caso es un arreglo y sobre el arreglo puedo utilizar metodos que en este caso son push y pop, por eso te mencionaba qie hay que tener cuidado con los conceptos de inmutabilidad
// PAra no pensar que CONST ya no nos va a permitir hacer nada y que asi se quede para siempre, asi se que segun el uso que este tenga puedes trabajar

// Tener en cuenta este ejemplo cuando estemos trabajando con arreglos y objetos