import React from 'react'

const Mesa = ({disponible=null, asientos, numero,handleChecked}) => {
    return (
        <td>
        {disponible?
            <label
                className="btn btn-info btn-md"
                title={`Reservar Mesa ${numero}`}
                >
                <input type="checkbox" id={numero} name={numero} className={asientos} onChange={handleChecked}/>
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
                    title="esta mesa ya está reservada por otra persona"
                    >
                    <input type="checkbox" disabled />
                    <font color="black" size={4}>
                        <strong>{" "+numero}</strong>
                    </font>
                    <i className="fas fa-utensils" />
                    <br />
                    <strong>
                        <font color="gray">&nbsp;ocupado&nbsp;</font>
                    </strong>
                </label>
        }
        </td>
    )
}

export default Mesa;
//si la mesa es true disponible, null no hay y false ocupada
// acordarse que se maneja una matriz de coordenadas