import React from 'react'
import {Link } from 'react-router-dom';

const LineaDeReserva = ({local, tipo,direccion, porcentajeOcupado, url, key }) => {
    console.log(url)
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
                <Link
                className={ porcentajeOcupado !==100 ?"btn btn-primary":"btn btn-primary disabled" }
                style={{background: 'rgb(78, 115, 223)'}}
                to={`${url}/mesas`}
                >
                Reservar
                </Link>
            </td>
        </tr>

    );
}

export default LineaDeReserva;
