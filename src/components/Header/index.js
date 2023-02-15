import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './header.css';

export default function Header() {
    return(
        <header className='container'>
            <Link to='/'>
                <img className='logo' src={logo} alt="Logo do Projeto" />
            </Link>

            <Link to='/reservas' className='reserva'>
                <div>
                    <strong> Minhas Reservas </strong>
                    <span>0 reservas</span>
                </div>
            </Link>
        </header>
    );
}