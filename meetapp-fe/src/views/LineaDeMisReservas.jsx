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
                <button className={autotest? "btn btn-primary" :"btn btn-primary disabled"} type="button">
                    Completar
                </button>
                </td>
            </tr>   
        </>
    )
}

export default LineaDeMisReservas
