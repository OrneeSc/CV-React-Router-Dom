import React from 'react';
import './Page2.css';
// import Spinner from '../../spinner.gif';

const text = 'ornee.sci@gmail.com';
const text2 = '1133600710';

const Page2 = () => {

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
            <section id="page2" className="page2">
            <h2>Mail</h2>
                <p>{text}</p>
            <h2>Celular</h2>
                <p>{text2}</p>
        </section>
        }
        </div>
    )
};

export default Page2;
