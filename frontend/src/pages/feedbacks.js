import '../../src/styles/componets/pages/feedbacks.css'
import React from "react";


const feedbacks = (props)=> {
    return(
    <main className="holder">
        <div className="columna contacto">
            <h2>Complete el siguiente formulario</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre"/>

                </p>
                <p>
                    <label>Telefono </label>
                    <input type="text" name="telefono" />
                </p>
                <p>
                    <label>Comentario</label>
                    <textarea name = "mensaje"></textarea>
                </p>
                <p className="centrar"><input type="submit"
                value="Enviar"/></p>
            </form>

                </div>
        <div className="columna datos">
            <h2>Otras Vias de contacto </h2>
            <p>Tambien contactarse con nosotros usando los siguientes medios: </p>
            <ul>
                <li>Telefono:2616558844</li>
                <li>Email:</li>
                <li>Facebook </li>
                <li>Skype</li>
                <li>Instagram</li>
            </ul>

        </div>
        
    </main>
    );
}

export default feedbacks;