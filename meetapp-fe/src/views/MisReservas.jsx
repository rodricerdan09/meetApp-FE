import React from "react";
import { Link } from "react-router-dom";
const MisReservas = () => {
  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">
        <strong>Inicio</strong>
      </h3>
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
                  Mostrar 
                  <select className="form-control form-control-sm custom-select custom-select-sm" defaultValue={10} >
                    <option value="10">
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
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Estado</th>
                  <th>Auto-test</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    San José
                  </td>
                  <td>
                    11-09-2021
                    <br />
                  </td>
                  <td>22:00</td>
                  <td>Pendiente</td>
                  <td>
                    <button className="btn btn-primary disabled" type="button">
                      Completar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Mirasoles
                  </td>
                  <td>26-09-2021</td>
                  <td>20:30</td>
                  <td>Pendiente</td>
                  <td>
                    <button className="btn btn-primary" type="button">
                      Completar
                    </button>
                    <br />
                  </td>
                </tr>
              
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
                Mostrando 1 de 1<br />
              </p>
            </div>
            <div className="col-md-6">
              <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <Link className="page-link" to="/mis-reservas" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="/mis-reservas">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="/mis-reservas" aria-label="Next">
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

export default MisReservas;
