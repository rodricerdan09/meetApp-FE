import React from 'react'
import { NavLink } from 'react-router-dom';

const LineaDeReserva = ({local, tipo,direccion, porcentajeOcupado, key }) => {
    
    let classColorBar="";
    porcentajeOcupado >=90 ? (classColorBar="progress-bar bg-danger") : porcentajeOcupado >=50 ? (classColorBar="progress-bar bg-warning"):(classColorBar="progress-bar bg-success") 
    return (
        <tr key={key}>
            <td>
                {/* <img
                        className="rounded-circle mr-2"
                        width={30}
                        height={30}
                        src="locales/surtidor.png"
                    /> */}
                {local}
            </td>
            <td>{tipo}</td>
            <td>
                {direccion}
                <br />
            </td>
            <td>
                <div className="progress">
                <div
                    className={classColorBar}
                    aria-valuenow={porcentajeOcupado}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{width: `${porcentajeOcupado}%`}}
                >
                    <strong>
                        {porcentajeOcupado}%
                    </strong>
                </div>
                </div>
            </td>
            <td>
                <NavLink
                className="btn btn-primary"
                style={{background: 'rgb(78, 115, 223)'}}
                to='/reservar/mesas'
                >
                Reservar
                </NavLink>
            </td>
        </tr>

    );
}

export default LineaDeReserva;
