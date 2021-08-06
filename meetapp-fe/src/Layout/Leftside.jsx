
// toggled
import React  from 'react'  
import { Link } from 'react-router-dom';
//import { useState } from 'react';  
////
const Leftside = ({toggled, slidebarToggled}) => {
  /* const [toggled, setToggled] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const slidebarToggled =()=>{
    if (isToggled) {
      setToggled("");
      setIsToggled(false);
    } else {
      setToggled("toggled");
      setIsToggled(true);
    } 
    console.log("ent2s") 
  }  */
  return (
    <nav className={`navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 ${toggled}`}>
      <div className="container-fluid d-flex flex-column p-0">
        <Link className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" to="/">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fab fa-meetup" />
          </div>
          <div className="sidebar-brand-text mx-3">
            <span className="text-capitalize">MeetApp</span>
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <ul className="navbar-nav text-light" id="accordionSidebar">
          <hr class="sidebar-divider d-none d-md-block"></hr>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fa fa-home" />
              <span>Inicio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/perfil">
              <i className="fas fa-user" />
              <span>Perfil</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reservar">
              <i className="fa fa-calendar-check" />
              <span>Reservar</span>
            </Link>
          </li>
          <hr class="sidebar-divider d-none d-md-block"></hr>
        </ul>
        <div className="text-center d-none d-md-inline">
          <button  
            onClick={slidebarToggled} 
            className="btn rounded-circle border-0" 
            id="sidebarToggle" 
            type="button" />
        </div>
      </div>
    </nav>
  )
}

export default Leftside
  


