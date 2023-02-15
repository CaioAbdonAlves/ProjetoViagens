import { useSelector } from 'react-redux';
import './style.css';
import { MdDelete } from 'react-icons/md';

export default function Reservas() {
    const reserves = useSelector(state => state.rootReducer.reserve);
    return(
      <div>
        <h1 className='title'>Você solicitou {reserves.length} reservas</h1>

        {reserves.map((reserve) => (
          <div key={reserve.id} className="reservas">
            <img src={reserve.image} alt={reserve.title} />
            <strong>{reserve.title}</strong>
            <span>Quantidade: {reserve.amount}</span>
            <button type='button' onClick={() => {}}>
              <MdDelete size={20} color="#191919"/>
            </button>
          </div>
        ))}

        <footer>
          <button type='button'>Solicitar Reservas</button>
        </footer>
      </div>  
    );
}