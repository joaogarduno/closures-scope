const myGlobal = 0;

// funcion que dentro de ella va a rescibir otra funcion y que va a tener otra funcion
// Y vamos acceder a estos contextos
function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    // funcion anidada
    // Creando una funcion dentro de otra funcion
    // funcion interna, y es aqui donde se cumple el concepto de "Closure" es decir ya estamos haciendo uso de una Closure
    function parent(){
        const inner = 2;
        console.log(myNumber, myGlobal);

        // pero que pasa si asignamos otra funcion dentro de la funcion
        function child(){
            console.log(inner, myNumber, myGlobal);
        }

        return child()
    }

    return parent();
}

myFunction();