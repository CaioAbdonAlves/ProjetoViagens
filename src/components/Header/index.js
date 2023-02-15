import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './header.css';

export default function Header() {
    const reserveSize = useSelector(state => state.rootReducer.reserve.length);
    return(
        <header className='container'>
            <Link to='/'>
                <img className='logo' src={logo} alt="Logo do Projeto" />
            </Link>

            <Link to='/reservas' className='reserva'>
                <div>
                    <strong> Minhas Reservas </strong>
                    <span>{reserveSize} reservas</span>
                </div>
            </Link>
        </header>
    );
}