import React from 'react'

const LineaDeReserva = ({local, tipo,direccion, porcentajeOcupado}) => {
    
    let classColorBar="";
    porcentajeOcupado >=90 ? (classColorBar="progress-bar bg-danger") : porcentajeOcupado >=50 ? (classColorBar="progress-bar bg-warning"):(classColorBar="progress-bar bg-success") 
    return (
        <tr>
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
                <button
                className="btn btn-primary"
                type="button"
                style={{background: 'rgb(78, 115, 223)'}}
                >
                Reservar
                </button>
            </td>
        </tr>

    );
}

export default LineaDeReserva;
