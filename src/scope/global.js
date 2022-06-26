// scope -> alcance de la accesibilidad de las variables
// tipos de scope:
    // global
    // function
    // block


// 
// 
// =========================================================
    
// =========================================================

// VARIABLES
    // Asignacion
    // Declaracion
    // Reasignacion
    // Redeclaracion



var a; // declarando
var b = 'b' // declaramos y asignamos
b = 'bb'; // reasignacion
var a = 'aa'; //redeclaracion

// =========================================================
    
// =========================================================

// Global Scope

// Cualquier variable que se encuentre en el documento pasan a ser variables GLOBALES y se instancian en el objeto WINDOW asi que vamos a poder acceder donde queramos a estas Funciones o Variables segun sea el caso que estemos agregando

var fruit = 'Apple'; // global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

// Estamos asignado una variable global que vamos a poder acceder segun sea el caso


// =============================

// OTRA FORMA DE CREAR UNA VARIABLE GLOBAL

// tener cuidado en hacerla, porque si no nos damos cuenta estamos creando una variable global, es cuando nosostros no tenemos cuidado a la hora de declarar

// cuando no declaramos la variable y simplemente la asignamos por defecto va a pasar a ser una variable global

function countries(){
    country = 'México'; // global
    console.log(country);
}

countries();
console.log(country);


// Entonces tenemos que tener cuidado a la hora de declarar una variable global por accidente


// =========================================================
    
// =========================================================