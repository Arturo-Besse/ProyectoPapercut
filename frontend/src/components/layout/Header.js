import '../../styles/componets/layout/Header.css'
import React from 'react';

const Header = (props)=> {
    return (
        <header>
        <div className='holder'>
            <div className='logo'>
                <img src="images/logo.png" width="250"
                    alt="usuarios gc"/>
                    
                    <h1>Control de Usuarios</h1>

            </div>
        </div>
        </header>
    );
}

export default Header;