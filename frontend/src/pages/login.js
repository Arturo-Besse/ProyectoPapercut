import '../../src/styles/componets/pages/login.css';
import React from "react";
//import '../../src/conexion.js';


const login = (props)=> {
    return(
    <main className="holder">
        <div className="columna login">
            <h2>Coloque nombre de Usuario y Contraseña</h2>
            
            <form action="" method="" className="ingresar">
                <p>
                    <label>Usuario</label>
                    <input type="text" name="usuario"/>

                </p>
                <p>
                    <label>Contraseña </label>
                    <input type="text" name="contraseña" />
                </p>
              
                <p className="centrar"><input type="submit"
                value="Entrar"/></p>
            </form>

                </div>
                </main>
    )

    
}

export default login;

