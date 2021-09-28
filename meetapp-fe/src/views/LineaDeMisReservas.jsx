import React from 'react'

const LineaDeMisReservas = ({nombre,fecha, hora, estado, autotest=false}) => {
    return (
        <>
            <tr>
                <td>
                {nombre}
                </td>
                <td>
                {fecha}
                <br />
                </td>
                <td>{hora}</td>
                <td>{estado}</td>
                <td>
                <button title="completar el autoste para asistir al local" className={autotest? "btn btn-sm btn-info" :"btn btn-sm btn-info disabled"} type="button">
                    <span className="icon text-white-50">
                        <i className="fas fa-info-circle"/>
                    </span>
                    <span className="text"> Completar</span>
                </button>
                </td>
            </tr>   
        </>
    )
}

export default LineaDeMisReservas
