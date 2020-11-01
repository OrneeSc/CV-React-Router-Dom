import React, {useState, useEffect} from 'react';
import './Page1.css';
import Spinner from '../../spinner.gif';

const titulo = 'Desarrolladora Frontend y Productora Audiovisual';
const text = 'Soy resolutiva, responsable y me gusta trabajar en equipo. Siempre dispuesta a enfrentar nuevos desafíos, y a seguiraprendiendo para perfeccionarme y poder insertarme laboral y profesionalmente como Desarrolladora Frontend'

const Page1 = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
         setLoading(false);
         }, 1000);
      }, []);

    return (
        <div>
        {
            loading ?
            <div className="spinner-container">
                <img src={Spinner} alt="Loading..." className='spinner'/>
            </div>
            :
            <section id="page1" className="page1">
            <h2>{titulo}</h2>
                <p>{text}</p>
            </section>
        }
        </div>
    )
};

export default Page1;
