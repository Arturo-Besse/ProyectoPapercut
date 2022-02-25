import '../../styles/componets/layout/Nav.css'
import { Link } from 'react-router-dom';
import React from "react";

const Nav = (props)=> {
    return(
        <nav>
            <div className='holder'>
                <ul>


               
                <li><Link to = "/">Inicio</Link></li>

                <li><Link to="/usuarios">Usuarios</Link></li>

                <li><Link to="/busqueda">Buscar</Link></li>

                <li><Link to="/nosotros">Nosotros</Link></li>


                <li><Link to= "/feedbacks">Feedbacks</Link></li>
                </ul>
            </div>

            
        </nav>
    );
}

export default Nav;