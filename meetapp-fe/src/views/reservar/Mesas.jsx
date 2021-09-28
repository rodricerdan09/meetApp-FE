import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import React, {useState,useEffect,useRef} from 'react';
import { useHistory } from 'react-router';
import {withRouter, useParams} from "react-router-dom";
import Mesa from './Mesa';
import axios from "axios";
import Loading from './../../layout/Loading';
import uniqid from 'uniqid';
const Mesas = () => {
  let history=useHistory()
  let {local,fecha,hora} = useParams();
  //console.log(useParams())
  const disponibleRef = useRef(null);
  const [piso, setPiso]=useState(1);
  const [cantidadPisos,setCantidadPisos]=useState({});
  const [acompaniantes, setAcompaniantes]=useState(0);
  const [form, setForm]=useState({});
  const [mesas, setMesas] = useState({});
  const cargarReservas = (piso) => {
    setForm(
      {}
    );
    setMesas(
      {
        mesas: [], 
        status: false
      }
    );
    //
    let url = `http://localhost:5000/api/local/${local}/piso/${piso}/mesas/`;
    axios.get(url)
    .then(res => 
      setMesas(
        {
          mesas: res.data,
          status: true
        }
      )
    );
  }
  useEffect (_=> cargarReservas(piso), [piso] );

  const obtenerPisos = () => {
  let urlPisos = `http://localhost:5000/api/cantidad-de-pisos/local/${local}/  `;
    axios.get(urlPisos)
    .then(res => 
      setCantidadPisos(
        {
          pisos: res.data,
          status: true
        }
      )
    );
  }
  useEffect (_=> obtenerPisos(), [] );
  const selectPisos=(cantidadPisos)=>{
    const opt=[];
    const maxPisos= cantidadPisos.pisos[0].pisos
    for (let n = 2; n <= maxPisos; n++) {
      opt.push(
        <option value={n}> 
         {n}º piso
        </option>
      )
    }
    return opt;
  } 

 //console.log(cantidadPisos.status)

  const bodyMesas = ({mesas}) => {
    let lugar=0
    let table = []; 
    let y= mesas[0].length;
  
    let encabezado=[];
    encabezado.push(<th></th>)
    for (let j = 0; j < y; j++) {
      encabezado.push(
        <th>
          {j+1}
        </th>
      )
    }
    table.push(<tr>{encabezado}</tr>)
    for (let i = 0; i < mesas.length; i++) {
      let content = []; 
      content.push(
          <td>
            {i+1}
          </td>
        )
        
      for (let j = 0; j <y; j++) {  
        
        if(mesas[i][j].disponible){
          lugar+=mesas[i][j].capacidad
        }
        
        content.push(
          <Mesa
            disponible={mesas[i][j].disponible}
            asientos={mesas[i][j].capacidad}
            numero={mesas[i][j].numero}
            handleChecked={handleChecked}
          />
        );
      }
      table.push(
        <tr>
          {content}
        </tr>
      )
    }
    disponibleRef.current.innerHTML=`Lugares disponibles: ${lugar}`;
    return table    
  };
    
      
  const handleSelectOnChanged=(e)=>setPiso(e.target.value);

  const handleChanged=(event)=>{
    //console.log("changed")
    let { value, min, max} = event.target;
    value = Math
    .max(
      Number(min), 
      Math.min(
        Number(max), 
        Number(value)
      )
    );
    setAcompaniantes(value);
  } 
  const handleChecked=(event)=>{
    //console.log("checked")
    let {name, className, checked} = event.target;
    if (!checked)
        delete form[name]
    else
      setForm(
        {
          ...form,
          [name]:className,
        }
      )
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    //alert(`Reserva hecha para ${local} en el piso ${piso}, fecha ${fecha},hora ${hora}, cantidad de acompañantes ${acompaniantes}`)
    //alert(JSON.stringify({local, piso, fecha, hora, acompaniantes, ...form}))
    
    console.log(Object.entries(form))
    let asistentes=acompaniantes+1;
    let asistentes2=acompaniantes+1;
    console.log(acompaniantes,"fhjfhfjh")
    let capacidadMesas=Object.values(form);
    let excedeMesas=false;
    let cantidadDesillas=0;
    capacidadMesas.reverse()
      .forEach((mesa,i) => {
        asistentes-=mesa;
        cantidadDesillas+=parseInt(mesa);

        if (asistentes<=0 && i!==capacidadMesas.length-1){
          excedeMesas=true;    
          return 
        }
      }
      );
      console.log(parseInt(cantidadDesillas)) 
      console.log(parseInt(asistentes))

      console.log(parseInt(cantidadDesillas) < parseInt(asistentes))
   
    const MySwal = withReactContent(Swal)
    const MySwal2 = withReactContent(Swal)
    if (excedeMesas) {
     
      MySwal.fire(
        {
          title: `Selecciona menos mesas para reservar`,
          text: `La cantidad de comensales incluyendote, es mucho menor a las mesas que solicita reservar`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> entendido',
          reverseButtons: false
        }
      )
      
      return
    }
    if(cantidadDesillas < asistentes2){
      alert("hkdhkdhk")
      MySwal2.fire(
        {
          title: `Selecciona más mesas para reservar`,
          text: `La cantidad de asisentos para los comensales incluyendote,no es suficiente selecciona más mesas`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> entendido',
          reverseButtons: false
        }
      )
      return
    }
    
    
    const swalWithBootstrapButtons = Swal.mixin(
      {
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      }
    );
   
    swalWithBootstrapButtons.fire(
      {
        title: `¿Desea confirmar la reserva para ${local} en el piso ${piso}?`,
        text: `fecha: ${fecha}, hora: ${hora}, con ${acompaniantes}  acompañantes`,
        icon: 'question',
        allowOutsideClick: false,
        showCancelButton: true,
        cancelButtonText: '<i class="fas fa-times"></i> Cancelar',
        confirmButtonText: '<i class="fas fa-check"></i> Confirmar',
        reverseButtons: false
      }
    ).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          {
            title: `Reserva para ir a ${local} confirmada`,
            text: `tu reserva ha sido confirmada para el ${fecha}, a la  hora: ${hora} `,
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: '<i class="fas fa-check"></i> Confirmar',
            reverseButtons: false,
          }
        );
        // axios.post(`http://localhost:5000/api/reservas`, { "id":uniqid(), "nombre":local,
        // "estado": "Pendiente",
        // "fecha":fecha,
        // "hora":hora,
        // "autotest":false })
        //   .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //   }).catch(e => {
        //     console.log(e);
        // })
        // history.push('/mis-reservas')
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          {
            title: `Reserva cancelada`,
            text: `tu reserva ha sido cancelada`,
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: '<i class="fas fa-check"></i> Confirmar',
            reverseButtons: false
          }
        )
      }
    });
    
  }
  return (
    <form className="container container-fluid" onSubmit={handleSubmit}>
      <h3 className="text-dark mb-4">
        <strong>
          Reserva de Mesas en {local.charAt(0).toUpperCase() + local.slice(1)}
        </strong>
      </h3>

      <div className="card-body">
        <div className="row">
          <div className="col-md-4 text-center">
            <label 
              style={{margin: '0px', width: '180px'}}
              title="ingresa la cantidad de acompañantes"
            >
              Acompañantes
            </label>
            <input
              title="ingresa la cantidad de acompañantes" 
              autoFocus
              type="number" 
              min={0} max={10} 
              id="acompaniantes" 
              name="acompaniantes" 
              value={acompaniantes} 
              onChange={handleChanged}
            />
          </div>
          <div className="col-md-4 text-center">
            <label  
              style={{margin: '0px', width: '180px'}}
              title="lugares disponibles para reservar en este piso"
            >
              <strong ref={disponibleRef}/>
            </label>
          </div>
          <div className="col-md-4 text-center">
            <label style={{width: '180px'}}>
              Piso del local 
            </label>
            <select 
              onChange={handleSelectOnChanged}
              value={piso}
              title="seleccione un piso para ver las mesas"
            >
              <optgroup label="Seleccione un piso">
                <option 
                  value={1} 
                >
                  1º piso
                </option>
                {
                  cantidadPisos.status===true? 
                    selectPisos(cantidadPisos) 
                    :
                    <strong>
                      cargando...
                    </strong>
                }
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
        <div className="card-body">
          <div
            className="table-responsive table mt-2"
            id="dataTable"
            role="grid"
            aria-describedby="dataTable_info"
          >
            <table className="table my-0" id="dataTable">
              {mesas.status ?  
                <>
                  <thead>
                  </thead>
                  <tbody> 
                  {bodyMesas(mesas)}
                  </tbody>
                  <tfoot>
                  </tfoot>
                </>
                :
                <td>
                  <Loading/>
                </td>
              }
            </table>
          </div>
        </div>
      </div>
      {mesas.status ?  
        <button
          className="btn btn-success d-flex mx-auto mt-3"
          style={{ marginTop: '10px', marginBottom: '30px'}}
          title="confirmar reserva con los datos proporcionados"
        >
          <span className="icon text-white-20" >
            <i className="fas fa-check fa"/>
          </span>
          <span class="text">Confirmar </span>  
          
        </button>
        :
        <span/>
      }
    </form>
  );
};

export default withRouter( Mesas);
