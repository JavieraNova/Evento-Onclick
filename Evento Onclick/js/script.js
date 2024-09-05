/*Cuando sé de clic en el botón “Iniciar sesión” este debe cambiar a «Cerrar sesión».*/
function cambiarTexto(boton) {
    if (boton.innerText === "Iniciar sesión") {
        boton.innerText = "Cerrar sesión";
    } else {
        boton.innerText = "Iniciar sesión";
    }
}

/*Cuando se da clic en “Agregar definición” el botón debe desaparecer*/
function agregarDefinicion(botonVerde){
    botonVerde.remove();
}

/*Cuando se da clic en “Me gusta” para una de las definiciones se dispara una 
alarma indicando que te gusto la definición junto con el título de la misma. */

/*Cada vez que se le da clic al botón de like de cada definición, este debe 
aumentar el conteo de likes de cada definición. Vamos a pasar por estos pasos
de manera tranquila y sin estrés para asegurarnos de que nuestra página web 
se vea y funcione de manera increíble. ¡Es como armar un rompecabezas pero con código! */

function mostrarAlerta(titulo, boton) {
    // Mostrar la alerta
    alert("Te gustó la definición: " + titulo);
    
    // Aumentar likes
    let numeroLikes = parseInt(boton.textContent) + 1; //parseInt() extraerá el número y luego se le aumenta uno:))
    boton.textContent = numeroLikes + " me gusta";
}
