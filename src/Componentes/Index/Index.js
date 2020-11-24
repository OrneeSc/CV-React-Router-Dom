import React from 'react';
import '../Index/Index.scss';
import Gif from '../../Assets/Gif2.gif';

const Index = () => {
    return (
        
        <div className="index-container">
            <img className="fondo" src={Gif} alt='proximamente'/>
            {/* <section className="index-content">
                <h1>Próximamente</h1>
            </section> */}
        </div>
    )
}

export default Index;
