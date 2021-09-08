
import React, {useState,useEffect,useRef} from 'react';
import Mesa from './Mesa';
import axios from "axios";
import Loading from './../../layout/Loading';
const Mesas = () => {
  
  const disponibleRef = useRef(null);
  const [piso, setPiso]=useState(1);
  const [mesas, setMesas] = useState( 
    {
      mesas: [], 
      status: false
    }
  );
  const cargarReservas = (piso) => {
    var url = `http://localhost:5000/api/mesas/${piso}`;
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
      useEffect (_=> cargarReservas(piso), [piso]);
      
      const bodyMesas = ({mesas}) => {
        let lugar=0
        let table = []; 
        let y= mesas.mesas[0].length;
        mesas=mesas.mesas
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
            lugar+=mesas[i][j].asientos
          }
          
          content.push(
            <Mesa
              disponible={mesas[i][j].disponible}
              asientos={mesas[i][j].asientos}
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
    
    const [form, setForm]=useState(
      {
        "acompaniantes":0,
      }
      );
      
      const handleSelectOnChanged=(e)=>setPiso(e.target.value)
      const handleChanged=(event)=>{
        console.log("changed")
        let { value, min, max, name } = event.target;
        value = Math
        .max(
          Number(min), 
          Math.min(
            Number(max), 
            Number(value)
            )
      );

    setForm({
      ...form,
      [name]:value,
      }
    )
  } 
  const handleChecked=(event)=>{
    console.log("checked")
    let {name, checked} = event.target;
    if (!checked)
        delete form[name]
    else
      setForm({
        ...form,
        [name]:checked,
        }
      )
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(JSON.stringify(form))
  }
  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <h3 className="text-dark mb-4"><strong>Reserva de Mesas </strong></h3>

      <div className="card-body">
        <div className="row">
          <div className="col-md-3 text-center">
            <label style={{margin: '0px', width: '180px'}}>
              Acompañantes
            </label>
            <input 
              type="number" 
              min={0} max={10} 
              id="acompaniantes" 
              name="acompaniantes" 
              value={form.acompaniantes} 
              onChange={handleChanged}
            />
          </div>
          <div className="col-md-3 text-center">
            <label  style={{margin: '0px', width: '180px'}}>
              <strong ref={disponibleRef}/>
            </label>
          </div>
          <div className="col-md-6 text-center">
            <label style={{width: '180px'}}>
              Piso del local 
            </label>
            <select 
              onChange={handleSelectOnChanged}
            >
              <optgroup label="Seleccione un piso">
                <option 
                  value={1} 
                  selected
                >
                  1er piso
                </option>
                <option value={2}>2do piso</option>
                <option value={3}>3er piso</option>
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
          className="btn btn-primary d-flex mx-auto"
          style={{ marginTop: '10px', marginBottom: '30px'}}
        >
          <span className="icon text-white-50" >
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

export default Mesas;
