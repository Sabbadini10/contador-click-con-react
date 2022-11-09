import React from "react";


function Boton({texto, botonClick, manejarClick}) { // recibimos los props
    return (
        //creamos un if ternario para darle la clase al boton
        <button className={ botonClick ? "boton-click" : "boton-reiniciar" }
        //creamos el evente listener para que escuche el evento
        onClick={manejarClick} >
            {texto}
        </button>
    )
}

export default Boton;