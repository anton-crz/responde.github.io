const charlar = () => {
    let realizarCharla = {
        "hola" : "!HOLA!",
        "como estas": "MUY BIEN GRACIAS, Y USTED",
        "igual gracias": "ME ALEGRA",
        "creador": "ME CREO ANTON_CRZ PUEDES CONTACTARLO DIRECTAMENTE DEL SIGUIENTE LINK                       wa.me//+51950689795",
    };

    let entradaUsuario = document.getElementById('entrada').value

    document.getElementById('dere').innerHTML = entradaUsuario ;
    if (entradaUsuario in realizarCharla) {
        document.getElementById('iz').innerHTML += realizarCharla[entradaUsuario];
    }else{
        document.getElementById('iz').innerHTML = "ESCRIBE CORRECTAMENTE!!!!!!";
    }
} 