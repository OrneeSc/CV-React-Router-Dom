import React from 'react';
import './MenuDesplegable.scss';
import {Link} from 'react-router-dom';


const MenuDesplegable = () => {

    return (
        <div className="menu-container">
            <nav>
                <Link to="/SobreMi" className='a-nav'>Sobre Mi</Link> 
                <Link to="/Contacto" className='a-nav'>Contacto</Link>
                <Link to="/Proyectos" className='a-nav'>Proyectos</Link>
                    
            </nav> 
        </div>
    )
}

export default MenuDesplegable;
