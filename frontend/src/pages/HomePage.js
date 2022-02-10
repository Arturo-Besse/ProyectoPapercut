import '../../src/styles/componets/pages/HomePage.css'
import React from 'react';

const HomePage = (props)=> {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src="images/home/img01.jpg" alt="EVA 00" />
            </div>
            <div className='columnas'>
                <div className='bienvenidos left'>
                    <h2>Bienvenidos</h2>
                    <p>Este es el EVA 00, piloteado por Rei Ayanami</p>
                </div>
                <div className='testimonios rigth'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span className='cita'>Simplemente Exelente</span>
                        <span className='autor'>Rei Ayanami</span>
                    </div>
                </div>
            </div>
                
        </main>
    );
}

export default HomePage;