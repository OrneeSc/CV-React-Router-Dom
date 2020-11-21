import React from 'react';
import './Page1.css';
// import Spinner from '../../spinner.gif';

const titulo = 'Desarrolladora Frontend';
const text = 'Me egresé en ADA ITW como Desarrolladora Frontend Jr. Mi objetivo es seguir capacitándome día a día para crecer de manera personal y poder insertarme laboralmente. Me considero resolutiva, curiosa y responsable. Siempre predispuesta para enfrentar nuevos desafíos.'

const Page1 = () => {

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //      setLoading(false);
    //      }, 500);
    //   }, []);

    return (
        <div>
        {/* {
            loading ?
            <div className="spinner-container">
                <img src={Spinner} alt="Loading..." className='spinner'/>
            </div>
            : */}
            <section id="page1" className="page1">
            <h2>{titulo}</h2>
                <p>{text}</p>
            </section>
        }
        </div>
    )
};

export default Page1;
