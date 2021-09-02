import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Mesa from './Mesa';
const Mesas = () => {
  const[acompaniantes,setAcompaniantes]=useState(0);  
  const [mesas, setMesas] = useState ([
    [
      {disponible: false, asientos: '4', numero: 1},
      {disponible: null, asientos: '4', numero: 2},
      {disponible: true, asientos: '4', numero: 3},
      {disponible: true, asientos: '4', numero: 3}
    ],
    [
      {disponible: true, asientos: '2', numero: 4},
      {disponible: false, asientos: '4', numero: 5},
      {disponible: null, asientos: '4', numero: 6},
      {disponible: true, asientos: '4', numero: 3}
    ],
    [
      {disponible: true, asientos: '2', numero: 7},
      {disponible: true, asientos: '4', numero: 8},
      {disponible: true, asientos: '4', numero: 9},
      {disponible: true, asientos: '4', numero: 3}
    ],
    [
      {disponible: true, asientos: '2', numero: 7},
      {disponible: true, asientos: '4', numero: 8},
      {disponible: true, asientos: '4', numero: 9},
      {disponible: true, asientos: '4', numero: 3}
    ]
  ]);
  const handleChange= event => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setAcompaniantes(value );
  };
  useEffect(() => {
    console.log(acompaniantes)
    
  }, [acompaniantes]);
  const getMesas = (mesas) => {
    let table = []; 
    let y= mesas[0].length;
    let encabezado=[];
    encabezado.push(<th></th>)
    for (let j = 0; j < y; j++) {
      encabezado.push(<th>{j+1}</th>)
    }
    table.push(<tr>{encabezado}</tr>)
    for (let i = 0; i < mesas.length; i++) {
        let content = []; 
        content.push(<td>{i+1}</td>)
        for (let j = 0; j <y; j++) {    
          content.push(<Mesa
            disponible={mesas[i][j].disponible}
            asientos={mesas[i][j].asientos}
            numero={mesas[i][j].numero}
          />);
        }
        table.push(<tr>{content}</tr>)
      }
    return table    
  };

  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">Reserva de Mesas</h3>

      <div className="card-body">
        <div className="row">
          <div className="col-md-3 text-center">
            <label style={{margin: '0px', width: '180px'}}>
              Acompañantes
            </label>
            <input type="number" min={0} max={10} value={acompaniantes} onChange={handleChange}/>
          </div>
          <div className="col-md-3 text-center">
            <label style={{margin: '0px', width: '180px'}}>
              (<strong>Lugares disponibles: 8</strong>)
            </label>
          </div>
          <div className="col-md-6 text-center">
            <label style={{width: '180px'}}>Piso del local</label>
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
              </thead>
              <tbody> 
                {getMesas(mesas)}
              </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <Link
        className="btn btn-primary d-flex mx-auto mt-3"
        role="button"
        style={{width: '100px', marginTop: '10px', marginBottom: '30px'}}
        to="/reservar/mesas"
      >
        Confirmar
      </Link>
    </div>
  );
};

export default Mesas;
