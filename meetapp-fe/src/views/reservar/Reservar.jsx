import React, { useState } from "react";
import LineaDeReserva from "./LineaDeReserva.jsx";
import { Link } from "react-router-dom";
const Reservar = () => {
  const arrayDeLocales=[
    {"local":"El Surtidor", "tipo":"Restobar", "direccion":"French 1010", "porcentajeOcupado":31},
    {"local":"Pedro's", "tipo":"Restobar", "direccion":"French 414", "porcentajeOcupado":100},
    {"local":"Mirasoles", "tipo":"Cafetería y Pastelería", "direccion":"Av. Las Heras 720", "porcentajeOcupado":51}
  ]
  const [locales, setLocales] = useState(arrayDeLocales);
  console.log(locales[0])

  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">
        <strong>Reservar</strong>
      </h3>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 text-center">
              <label style={{ margin: "0px", width: "180px" }}>
                <strong>Ingrese día a reservar</strong>
              </label>
              <input type="date" defaultValue="2021-06-19" />
            </div>
            <div className="col-md-6 text-center">
              <label style={{ width: "180px" }}>
                <strong>Ingrese hora a reservar</strong>
              </label>
              <input type="time" defaultValue="22:00" name={0} />
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 text-nowrap">
              <div
                id="dataTable_length"
                className="dataTables_length"
                aria-controls="dataTable"
              >
                <label>
                  Mostrar&nbsp;
                  <select className="form-control form-control-sm custom-select custom-select-sm">
                    <option value={10} selected>
                      10
                    </option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="text-md-right dataTables_filter"
                id="dataTable_filter"
              >
                <label>
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    aria-controls="dataTable"
                    placeholder="Buscar local"
                  />
                </label>
              </div>
            </div>
          </div>
          <div
            className="table-responsive table mt-2"
            id="dataTable"
            role="grid"
            aria-describedby="dataTable_info"
          >
            <table className="table my-0" id="dataTable">
              <thead>
                <tr>
                  <th>Local</th>
                  <th>Tipo</th>
                  <th>Dirección</th>
                  <th>Ocupación</th>
                </tr>
              </thead>
              <tbody>
                { locales.map(local =>
                    <LineaDeReserva 
                      local={local.local} 
                      tipo={local.tipo} 
                      direccion={local.direccion} 
                      porcentajeOcupado={local.porcentajeOcupado} 
                    />)
                } 
              </tbody>
              <tfoot>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="row">
            <div className="col-md-6 align-self-center">
              <p
                id="dataTable_info"
                className="dataTables_info"
                role="status"
                aria-live="polite"
              >
                Mostrando 1 a 3 de 1
              </p>
            </div>
            <div className="col-md-6">
              <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="/reservar" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link  className="page-link" to="/reservar">
                      1
                    </Link>
                  
                  </li>
                  <li className="page-item disabled">
                    <Link className="page-link"  aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservar;
