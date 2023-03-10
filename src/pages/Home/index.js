import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import api from '../../services/api.js';
import {MdFlightTakeoff} from 'react-icons/md';
import './style.css';
import { addReserve } from "../../store/modules/reserve/actions.js";

export default function Home() {
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function loadTrips() {
            const response = await api.get('/trips');
            setTrips(response.data);
        }

        loadTrips();
    }, [])
    
    function handleAdd(trip) {
        dispatch(addReserve(trip));
    }

    return(
        <div>
            <div className="box">
                {trips.map((trip) => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title} />
                        <strong>{trip.title}</strong>
                        <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>

                        <button type="button" onClick={() => handleAdd(trip)}>
                            <div>
                                <MdFlightTakeoff size={16} color="#fff"/>
                            </div>
                            <span>Solicitar Reserva</span>
                        </button>
                    </li>
                ))}
            </div>
        </div>
    );
}