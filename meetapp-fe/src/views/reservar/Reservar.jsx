import React, { useState, useEffect} from "react";
import LineaDeReserva from "./LineaDeReserva.jsx";

import { Link, useRouteMatch} from "react-router-dom";
import axios from 'axios';
import moment from "moment";
const Reservar = () => {
  /* const arrayDeLocales=[
    {"local":"El Surtidor", "tipo":"Restobar", "direccion":"French 1010", "porcentajeOcupado":31},
    {"local":"Pedro's", "tipo":"Restobar", "direccion":"French 414", "porcentajeOcupado":100},
    {"local":"Mirasoles", "tipo":"Cafetería y Pastelería", "direccion":"Av. Las Heras 720", "porcentajeOcupado":51}
  ]
  const [locales, setLocales] = useState(arrayDeLocales);
  console.log(locales[0]) */

  let {url} = useRouteMatch(); //{path,url}
  const now = moment();
  const later = moment();
  let date= now.format('YYYY-MM-DD');
  let maxDate=later.add(1, 'months').format('YYYY-MM-DD');
  let hour=now.format('HH:00')
  console.log(hour);
  const [fecha, setFecha] = useState(date);
  const [hora, setHora] = useState("20:00");
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("");
  const [locales, setLocales] = useState( 
    {
      locales: [], 
      status: false
    })
  const cargarLocales = () => {
      let url = `http://localhost:5000/api/disponibilidad/${fecha}/${hora}`;
      axios.get(
        url
      )
      .then(res => {
          setLocales({
            locales: res.data,
            status: true
          });
      });
  }
  useEffect (() => {
    cargarLocales();
  }, [fecha, hora]);


  const localesFiltrados = locales.locales.filter((local) =>
    local.categoria.toLowerCase().includes(categoria.toLowerCase()) 
    &&(
      local.nombre.toLowerCase().includes(search.toLowerCase())|
      local.direccion.toLowerCase().includes(search.toLowerCase())
    )
  );
      console.log(hora)
  return (
    <div className="container container-fluid">
      <h3 className="text-black mb-4">
        <strong>Realizar Una Nueva Reserva</strong>
      </h3>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 text-center">
              <label style={{ margin: "0px", width: "180px" }}>
                <strong> Día de la reserva</strong>
              </label>
              <input 
                title="elije un día para la reserva"
                type="date" 
                defaultValue={date} 
                min={date} 
                max={maxDate}
                onChange={e=>setFecha(e.target.value)}
              />
            </div>
            <div className="col-md-6 text-center">
              <label style={{ width: "180px" }}>
                <strong>Horario de la reserva</strong>
              </label>
                <i className="fa fa-clock " 
                  style={
                    {
                      "borderStyle": "groove", "borderRadius": "3px",  
                      "height": "30px", border: "8px  #FFFFF", "paddingTop": "4px", "paddingLeft":"3px"
                    }
                  }
                >
                &nbsp;
                &nbsp;
                <select 
                  onChange={e=>setHora(e.target.value)}
                  value={"20:00"}
                  title="seleccione un horario para reservar"
                  style={{"border": 0, "outline": 0, "backgroundColor": "transparent", "-webkit-appearance":"none", "appearance":"none"}}
                >
                
                <optgroup>
                  <option 
                    value={"10:00"} 
                  >
                  10:00 &nbsp;
                  </option>
                  <option 
                    value={"11:00"} 
                  >
                    11:00 
                  </option>
                  <option 
                  value={"12:00"} 
                  >
                    12:00
                  </option>
                  <option 
                  value={"13:00"} 
                  >
                    13:00
                  </option>
                  <option 
                  value={"14:00"} 
                  >
                    14:00
                  </option>
                  <option 
                  value={"15:00"} 
                  >
                    15:00
                  </option>
                  <option 
                  value={"18:00"} 
                  >
                    18:00
                  </option>
                  <option 
                  value={"19:00"} 
                  >
                    19:00
                  </option>
                  <option 
                  value={"20:00"} 
                  >
                    20:00
                  </option>
                  <option 
                  value={"21:00"} 
                  >
                    21:00
                  </option>
                  <option 
                  value={"22:00"} 
                  >
                    22:00
                  </option>
                  <option 
                  value={"23:00"} 
                  >
                    23:00
                  </option>
                </optgroup>

                </select>
                </i>
            </div>
            
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 text-nowrap">
              <div
                id="dataTable_length"
                className="dataTables_length"
                aria-controls="dataTable"
              >
                <label>
                  Mostrar&nbsp;
                  <select className="form-control form-control-sm custom-select custom-select-sm" defaultValue={10}>
                    <option value={10}>
                      10
                    </option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-md-4 text-nowrap">
                <label>
                  Categoria&nbsp;
                  <select 
                    title="seleccione una categoria para buscar"
                    className="form-control form-control-sm custom-select custom-select-sm" 
                    defaultValue={10} 
                    onChange={(e)=>{setCategoria(e.target.value)}}
                  >
                    <option 
                      value={""}
                    >
                      todos
                    </option>
                    <option 
                      value={"bar"}
                    >
                      bar
                    </option>
                    <option 
                      value={"restobar"}
                    >
                      Restobar
                    </option>
                    <option 
                      value={"restaurante"}
                    >
                      restaurante
                    </option>
                    <option 
                      value={"cafeteria"}
                    >
                      cafetería
                    </option>
                  </select>
                </label>
              
            </div>
            <div className="col-md-4">
             
                <label >
                  <input
                    title="realice una busqueda de un local"
                    type="search"
                    className="form-control form-control-sm"
                    aria-controls="dataTable"
                    placeholder="🔎Buscar local"
                    autoFocus
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </label>
              
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
                  <th>Categoria</th>
                  <th>Dirección</th>
                  <th>Capacidad Ocupada</th>
                </tr>
              </thead>
              <tbody>
                {locales.status 
                  && 
                  localesFiltrados
                  .map(local =>
                    <LineaDeReserva 
                      key={local.id}
                      local={local.nombre} 
                      categoria={local.categoria} 
                      direccion={local.direccion} 
                      porcentajeOcupado={local.porcentajeOcupado}
                      url={url}
                      fecha={fecha} 
                      hora={hora}
                    />
                  )
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
                {localesFiltrados.length !==0 ?  `Mostrando 1 a ${localesFiltrados.length} de 1` : "No hay resultados"}
              </p>
            </div>
            <div className="col-md-6" >
              <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="/reservar" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </Link>
                  </li>
                  <li className="page-item active" >
                    <Link  className="page-link" to="/reservar">
                      1
                    </Link>
                  
                  </li>
                  <li className="page-item disabled">
                    <Link className="page-link" to="/reservar" aria-label="Next">
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
