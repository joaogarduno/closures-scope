// sin contexto de lo que son las Closures

function moneyBox( coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

// Ingresando monedas
// se ingresaron 2 monedas una de 5 y otra de 10 ¿Qué sucede?
moneyBox(5);
moneyBox(10);


// --------------------------------
// ¿Que esta pasando con el codigo de arriba?
// La logica que estamos ejecutando no esta recordando que tiene la variable en este caso saveCoins
// Entonces... no esta ahorrando

// Se va arreglar este problema haciendo una Closure que nos va a permitir:
    // Acceder a ese concepto de ambito lexico de una variable
    // Recordar lo que tiene en las ejecuciones y con esto ahorrar verdaderamente con Javascript


// --------------------------------
// Con Closure
function moneyBox() {
    let saveCoins = 0;

    // Ahora vamos hacer una Closure, creando una nueva funcion que a esta misma si le vamos a pasar un argumento los "coins", las monedas que queremos pasarle.
    // Y dentro vamos hacer la logica que vamos a tener en este caso o que teniamos en nuestra funcion anterior y luego vamos a retornar lo que seria esta logica para poderla implementar y luego probar
    function countCoins(coins){
        // reasignar el valor con adicion
        saveCoins += coins;
        console.log(`Money Box: $${saveCoins}`);
    }
    return countCoins;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);


// --------------------------------

// Va ser una instancia de lo que seria "moneyBox"
const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(15);

// Esto es lo que implica un caso practico haciendo una Closure acceder a esa variable por el ambito lexico y con esto va haciendo adicion para poder mostrarme que mi alcancia funciona de forma correcta.

// Entendimos lo que significa una Closure y donde podemos sacarle provecho.
// Si bien, tambien podemos hacer esto con otros elementos de logica que pueden llegar a estar dentro de Javascript, pero tambien nos va a permitir hacer o reducir los calculos que podemos llegar hacer en algoritmos mucho mas avanzados.

// Esa es la importancia de entender como es este concepto de, crear una funcion dentro de la funcion para volverlo una Closure, acceder a los elementos de las variables con el concepto de ambito lexico y con ello recordar ese contexto para poder utilizar y lo que nosotros necesitemos dentro de esa logica que vayamos a crear


// Ejemplo que se pudieran resolver o crear con este concepto (Closures)

