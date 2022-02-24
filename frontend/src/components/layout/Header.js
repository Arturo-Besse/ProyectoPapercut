import '../../styles/componets/layout/Header.css'
import '../../styles/componets/pages/login.css'
import React from 'react';

const Header = (props)=> {
    return (
        <header>
            
        <div className='holder'>
            <div className='logo'>
                <img src="images/logo.png" width="100"
                    alt="Transporte X"/>
                    <h1>Control de Usuarios</h1>
            </div>
        </div>
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

        

        
        </header>
    );
}

export default Header;