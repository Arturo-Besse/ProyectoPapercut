import '../../src/styles/componets/pages/NosotrosPage.css'
import React from 'react';

const NosotrosPage = (props)=> {
    return(
        <section className='holder'>
            
            <div className='historia'>
                <h2>Historia</h2>
                <p>La histoira de Evangelion es muuuy larga compa</p>
            </div>
            <h2>Staff</h2>
            <div className='personas'>
                <div className='persona'>
                    <img src="images/nosotros/nosotros1.jpg" width="75" alt="Niños Elegidos"/>
                    <h5>Shiyi Ikari</h5>
                    <h6>Asuka </h6>
                    <p>Staff de Evangelion Neon Genesis (Anime)</p>
                </div>
            </div>


                
        </section>
    );
}

export default NosotrosPage;