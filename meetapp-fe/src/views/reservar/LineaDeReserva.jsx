import React from 'react'
import { useHistory } from 'react-router';

const LineaDeReserva = ({local,categoria, direccion, porcentajeOcupado, url,fecha,hora, key }) => {
    console.log(url)
    let history=useHistory();
    let classColorBar="";
    porcentajeOcupado >=90 ? 
        (classColorBar="progress-bar bg-danger") 
            : porcentajeOcupado >=50 ? 
                (classColorBar="progress-bar bg-warning")
                :(classColorBar="progress-bar bg-success") 
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
            <td>{categoria}</td>
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
                    title={`ver mesas disponibles en ${local}`}
                    className={ 
                        porcentajeOcupado !==100 ?
                        "btn btn-secondary btn-sm"
                        :"btn btn-secondary btn-sm disabled" 
                    }
                    onClick={e=>history.push(`local/${local}/fecha/${fecha}/hora/${hora}/mesas/`)}
                    disabled={ porcentajeOcupado !==100 ? false: true}
                >
                    <span className="icon text-white-10">
                        <i className="fas fa-arrow-right"/>
                    </span>
                    <span className="text"> Reservar</span>
                </button>
            </td>
        </tr>

    );
}

export default LineaDeReserva;
