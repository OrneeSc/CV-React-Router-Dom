import React from 'react';
import './MenuDesplegable.scss';
import {Link} from 'react-router-dom';


const MenuDesplegable = ({displayMenu, showMenu}) => {

    return (
        <div className="menu-container">
            
            <nav>
                <Link to="/SobreMi" >
                    <button onClick={showMenu} className='a-nav'>
                        Sobre Mi
                    </button>
                </Link> 

                <Link to="/Contacto">
                    <button onClick={showMenu} className='a-nav'>
                        Contacto
                    </button>
                </Link>

                <Link to="/Proyectos">
                    <button onClick={showMenu} className='a-nav'>
                        Proyectos
                    </button>
                </Link>    
            </nav> 
            
        </div>
    )
}

export default MenuDesplegable;
