import React from 'react';
import '../Index/Index.scss';
import Fondo from '../../Assets/Fondo.jpg';

const Index = () => {
    return (
        
        <div className="index-container">
            <img className="fondo" src={Fondo} />
            <section className="index-content">
                <h1>Próximamente</h1>
            </section>
        </div>
    )
}

export default Index;
