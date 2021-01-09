import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faPhone, faLaugh, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({displayMenu, showMenu}) => {

    return (
        
        <header className="main-header">

            <div className="logo-header">
            <Link to="/" className='logo-link'>
                <h1>Ornella Sciarrillo</h1>
            </Link>  
            </div>

            <div className="text-header">
                <nav>
                    <Link to="/SobreMi" >Sobre mí</Link> 
                    <FontAwesomeIcon icon={faLaugh} className='faIcons' / >  
                    <Link to="/Contacto" >Contacto</Link>
                    <FontAwesomeIcon icon={faPhone} className='faIcons' / >
                    <Link to="/Proyectos" >Proyectos</Link>
                    <FontAwesomeIcon icon={faUserGraduate} className='faIcons' / > 
                </nav>
            </div>
        
            <Link to= { displayMenu ? "/MenuDesplegable" : "/"} >
                <button className="btn-menu" onClick={showMenu}>
                    { displayMenu ?
                    <FontAwesomeIcon icon= {faBars} className='faBars'/>
                    :
                    <FontAwesomeIcon icon= {faTimes} className='faBars'/>
                    }                    
                </button>
            </Link> 

        </header>
    )
};

export default Header;
