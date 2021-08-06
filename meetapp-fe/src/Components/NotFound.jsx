import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="container-fluid">

        
        <div className="text-center">
            <div className="error mx-auto" data-text="404">404</div>
            <p clasNames="lead text-gray-800 mb-5">Página No Disponible</p>
            <p className="text-gray-500 mb-0">La dirección solicitada no existe...</p>
            <Link to="/">&larr; Volver Al Inicio</Link>
        </div>

        </div>
    )
}

export default NotFound
