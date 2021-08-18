import React from 'react'

const Mesa = ({disponible=null, asientos, numero}) => {
    return (
        <td>
        {disponible?
            <label
                className="btn btn-success btn-md"
                title="Reservar Mesa"
                >
                <input type="checkbox" />
                <font color="black" size={4}>
                    <strong>{" "+numero}</strong>
                </font>
                <i className="fas fa-utensils" />
                <br />
                <strong>
                    <font color="white">{asientos} asientos</font>
                </strong>
            </label>
            :
            disponible===null?
                <span></span>
                :
                <label
                    className="btn btn-danger btn-md disabled"
                    title="Reservar Mesa"
                    >
                    <input type="checkbox" disabled />
                    <font color="black" size={4}>
                        <strong>{" "+numero}</strong>
                    </font>
                    <i className="fas fa-utensils" />
                    <br />
                    <strong>
                        <font color="gray">ocupado</font>
                    </strong>
                </label>
        }
        </td>
    )
}

export default Mesa;
//si la mesa es true disponible, null no hay y false ocupada
// acordarse que se maneja una matriz de coordenadas