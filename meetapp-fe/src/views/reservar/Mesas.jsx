import React from 'react'
import { Link } from 'react-router-dom';
import Mesa from './Mesa';

const Mesas = () => {
    return (
      <div className="container-fluid">
        <h3 className="text-dark mb-4">Reserva de Mesas</h3>

        <div className="card-body">
          <div className="row">
            <div className="col-md-3 text-center">
              <label style={{ margin: "0px", width: "180px" }}>
               Acompañantes
              </label>
              <input type="number"  min={0} max={10} />
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

        <div className="card shadow">
          <div className="card-header py-3">
            <p className="text-primary m-0 font-weight-bold">
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
              <table className="table my-0" id="dataTable">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <th />
                    <th>1</th>
                    <th>2</th>
                  </tr>
                  
                  <tr>
                    <td>1</td>
                    <Mesa disponible={true} asientos={7} numero={1}/>
                    <Mesa disponible={false} asientos={7} numero={1}/>
                    
                  </tr>
                  <tr>
                    <td>2</td>
                    
                      <Mesa disponible={null} />         
                      <Mesa disponible={false} asientos={7} numero={1}/>
                  </tr>
                  <tr>
                    <td>3</td>
                    
                      <Mesa disponible={false} asientos={7} numero={1}/>
                   
                      <Mesa disponible={false} asientos={7} numero={1}/>
                    
                   
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
