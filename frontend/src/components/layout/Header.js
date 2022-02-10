import '../../styles/componets/layout/Header.css'
import React from 'react';

const Header = (props)=> {
    return (
        <header>
        <div className='holder'>
            <div className='logo'>
                <img src="images/logo.png" width="100"
                    alt="Transporte X"/>
                    <h1>Industria Creativa NERV</h1>

            </div>
        </div>
        </header>
    );
}

export default Header;