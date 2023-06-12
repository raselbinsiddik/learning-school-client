import { Link } from 'react-router-dom';
import not from '../src/assets/404.gif'

const NotPound = () => {
    return (
        <div className='text-center'>
            <img className='w-96' src={not} alt="" />
            <div className='text-3xl text-center mt-8'>do not find your information</div>
            <Link to="/"><button className='btn btn-warning'>Home</button></Link>
        </div>
    );
};

export default NotPound;