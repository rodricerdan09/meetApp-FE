import React from 'react'
import { Link } from 'react-router-dom';

const Mesas = () => {
    return (
      <div class="container-fluid">
        <h3 class="text-dark mb-4">Reserva de Mesas</h3>

        <div className="card-body">
          <div className="row">
            <div className="col-md-3 text-center">
              <label style={{ margin: "0px", width: "180px" }}>
                Cantidad de comensales
              </label>
              <input type="number" min={1} max={10} />
            </div>
            <div className="col-md-3 text-center">
              <label style={{ margin: "0px", width: "180px" }}>
                (<strong>Lugares disponibles: 8</strong>)
              </label>
            </div>
            <div className="col-md-6 text-center">
              <label style={{ width: "180px" }}>Piso del local</label>
              <select>
                <optgroup label="Seleccione un piso">
                  <option value="12" selected>
                    1er piso
                  </option>
                  <option value="13">2do piso</option>
                  <option value="14">3er piso</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>

        <div class="card shadow">
          <div class="card-header py-3">
            <p class="text-primary m-0 font-weight-bold">
              Seleccione las mesas a reservar:
            </p>
          </div>
          <div class="card-body">
            <div
              class="table-responsive table mt-2"
              id="dataTable"
              role="grid"
              aria-describedby="dataTable_info"
            >
              <table class="table my-0" id="dataTable">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <th />
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <label
                        className="btn btn-success btn-md"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="white">5 asientos</font>
                        </strong>
                      </label>
                    </td>
                    <td>
                      <label
                        className="btn btn-danger btn-md disabled"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" disabled />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="gray">ocupado</font>
                        </strong>
                      </label>
                    </td>
                    <td>
                      <label
                        className="btn btn-success btn-md"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="white">5 asientos</font>
                        </strong>
                      </label>
                    </td>
                    <td>
                      <label
                        className="btn btn-danger btn-md disabled"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" disabled />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="gray">ocupado</font>
                        </strong>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <label
                        className="btn btn-success btn-md"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="white">5 asientos</font>
                        </strong>
                      </label>
                    </td>
                    <td>
                      <label
                        className="btn btn-danger btn-md disabled"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" disabled />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="gray">ocupado</font>
                        </strong>
                      </label>
                    </td>
                    <td>
                      <label
                        className="btn btn-success btn-md"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="white">5 asientos</font>
                        </strong>
                      </label>
                    </td>
                    <td>
                      <label
                        className="btn btn-danger btn-md disabled"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" disabled />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="gray">ocupado</font>
                        </strong>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <label
                        className="btn btn-success btn-md"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="white">5 asientos</font>
                        </strong>
                      </label>
                    </td>
                    <td>
                      <label
                        className="btn btn-danger btn-md disabled"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" disabled />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="gray">ocupado</font>
                        </strong>
                      </label>
                    </td>
                    <td>
                      <label
                        className="btn btn-success btn-md"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="white">5 asientos</font>
                        </strong>
                      </label>
                    </td>
                    <td>
                      <label
                        className="btn btn-danger btn-md disabled"
                        title="Editar Mesa"
                      >
                        <input type="checkbox" disabled />
                        <font color="black" size={4}>
                          <strong>05</strong>
                        </font>
                        <i className="fas fa-utensils" />
                        <br />
                        <strong>
                          <font color="gray">ocupado</font>
                        </strong>
                      </label>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <Link 
            className="btn btn-primary d-flex mx-auto mt-3" 
            role="button" 
            style={{width: '100px', marginTop: '10px', marginBottom: '30px'}} 
            to="/reservar/mesas">
            Confirmar
        </Link>
      </div>
    );
}

export default Mesas;
