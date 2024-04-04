import moment from 'moment/moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <header>
            <div className="container mx-auto px-5">
                <img className='w-60 mx-auto mt-5' src={logo} alt="" />
                <h3 className='text-base mt-3 text-gray-500 font-semibold text-center font-poppins'>Bringing You the Latest, Unbiased News from Around the Globe</h3>
                <h3 className='text-base mb-4 text-gray-500 font-semibold text-center font-poppins'>{moment().format("dddd, MMMM D, YYYY")}</h3>
            </div>
        </header>
    );
};

export default Header;