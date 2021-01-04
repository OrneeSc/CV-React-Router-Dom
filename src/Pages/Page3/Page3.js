import React from 'react';
import './Page3.scss';
// import Spinner from '../../spinner.gif';

// const titulo1 = 'Ada ITW - (Febrero - Noviembre 2020)';
// const text1 = 'Desarrolladora Web Frontend Jr. 400 horas. HTML5, CSS3, Sass, Javascript - ES6, Git, GitHub, React.Js, Responsive Design';

// const titulo2 = 'Tea Imagen - (2015 - 2017)';
// const text2 = 'Técnica Superior en Producción Integral de TV y Servicios Audiovisuales';

// const titulo3 = 'Colegio Claret - (2008 - 2012)';
// const text3 = 'Bachillerato con orientación en Cs. Sociales y de la Comunicación';

const Page3 = () => {

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //      setLoading(false);
    //      }, 500);
    //   }, []);

    return (
        <div className='page3-container'>
        {/* {
            loading ?
            <div className="spinner-container">
                <img src={Spinner} alt="Loading..." className='spinner'/>
            </div>
            : */}
            <section id="page3" className="page3-content">
                <h2>En código</h2>
                    <button type="button" className="page3-button"> 
                        <a href="https://github.com/OrneeSc">GITHUB</a>
                    </button>  
                <h2>En Netlify</h2>
                    <button type="button" className='page3-button'>
                        <a href="https://api-gatitos.netlify.app/">Api-Gatitos</a>
                    </button>
                    <button type="button" className='page3-button'>
                        <a href="https://polaroid-html.netlify.app">Polaroid</a>
                    </button>
                    <button type="button" className='page3-button'>
                        <a href="https://contador-tablas.netlify.app/">Contador</a>
                    </button>
            </section>
        
        </div>
    )
};

export default Page3;
