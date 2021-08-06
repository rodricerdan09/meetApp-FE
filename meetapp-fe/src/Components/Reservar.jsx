import React from "react";

const Reservar = () => {
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
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/surtidor.png"
                    />
                    El Surtidor
                  </td>
                  <td>Restobar</td>
                  <td>
                    French y Don Bosco
                    <br />
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        aria-valuenow={35}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "35%" }}
                      >
                        35%
                      </div>
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{ background: "rgb(78, 115, 223)" }}
                    >
                      Reservar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/mirasoles.png"
                    />
                    Mirasoles 1
                  </td>
                  <td>Cafetería y pastelería</td>
                  <td>Av. Las Heras 720</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "95%" }}
                      >
                        95%
                      </div>
                    </div>
                    <br />
                  </td>
                  <td>
                    <a
                      className="btn btn-primary"
                      role="button"
                      href="reserva_local.html"
                    >
                      Reservar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/mosto.png"
                    />
                    Mosto
                  </td>
                  <td>Cervecería Artesanal</td>
                  <td>Donovan 77</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      >
                        50%
                      </div>
                    </div>
                    <br />
                  </td>
                  <td>
                    <button className="btn btn-primary" type="button">
                      Reservar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/sanjose.png"
                    />
                    San Jose 1
                  </td>
                  <td>Cafetería</td>
                  <td>Carlos Pellegrini 582</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "20%" }}
                      >
                        20%
                      </div>
                    </div>
                    <br />
                  </td>
                  <td>
                    <button className="btn btn-primary" type="button">
                      Reservar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/losemilios.jpg"
                    />
                    Los Emilios
                  </td>
                  <td>Restaurante</td>
                  <td>Av. Avalos 516</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        60%
                      </div>
                    </div>
                    <br />
                  </td>
                  <td>
                    <button className="btn btn-primary" type="button">
                      Reservar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/clover.png"
                    />
                    Clover
                  </td>
                  <td>Restobar</td>
                  <td>Ayacucho 285</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        100%
                      </div>
                    </div>
                    <br />
                  </td>
                  <td>
                    <button className="btn btn-primary disabled" type="button">
                      Reservar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/labiela.png"
                    />
                    La Biela
                    <br />
                  </td>
                  <td>Restaurante</td>
                  <td>Güemes 695</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "30%" }}
                      >
                        30%
                      </div>
                    </div>
                    <br />
                  </td>
                  <td>
                    <button className="btn btn-primary" type="button">
                      Reservar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/shippo.jpg"
                    />
                    Shippo
                  </td>
                  <td>Restaurante</td>
                  <td>Av. Rivadavia 128</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        80%
                      </div>
                    </div>
                    <br />
                  </td>
                  <td>
                    <button className="btn btn-primary" type="button">
                      Reservar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/viejoalmacen.jpg"
                    />
                    El Viejo Almacén de Lomos
                  </td>
                  <td>Restaurante</td>
                  <td>
                    Santa Fe 901
                    <br />
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        100%
                      </div>
                    </div>
                    <br />
                  </td>
                  <td>
                    <button className="btn btn-primary disabled" type="button">
                      Reservar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle mr-2"
                      width={30}
                      height={30}
                      src="locales/medialiunas.jpg"
                    />
                    Medialunas Calentitas
                  </td>
                  <td>Cafetería</td>
                  <td>Juan B. Justo 301</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        aria-valuenow={23}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "23%" }}
                      >
                        23%
                      </div>
                    </div>
                    <br />
                  </td>
                  <td>
                    <button className="btn btn-primary" type="button">
                      Reservar
                    </button>
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
                Mostrando 1 a 10 de 27
              </p>
            </div>
            <div className="col-md-6">
              <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
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
