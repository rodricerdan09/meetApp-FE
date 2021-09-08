
// toggled
import React  from 'react'  
import { NavLink} from 'react-router-dom';
import { useState,useEffect } from 'react';  
////
const Leftside = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  const toggled=()=>setIsToggled(isToggled=>!isToggled);
  useEffect(() => {
    props.toggledRef.current = toggled;

    return () => {
      props.toggledRef.current = null;
    };
  });
  return (
    <nav className={
      isToggled ? 
        `navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 toggled`
        :`navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0`
      }
    >
      <div className="container-fluid d-flex flex-column p-0">
        <NavLink className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" to="/">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fab fa-meetup bg-primary" />
          </div>
          <div className="sidebar-brand-text mx-3">
            <span className="text-capitalize">MeetApp</span>
          </div>
        </NavLink>
        <hr className="sidebar-divider my-0" />
        <ul className="navbar-nav text-light" id="accordionSidebar">
          <hr className="sidebar-divider d-none d-md-block"></hr>
          <li className="nav-item">
            <NavLink className="nav-link" to="/mis-reservas">
              <i className="fa fa-home" />
              <span>Mis Reservas</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reservar">
              <i className="fa fa-calendar-check" />
              <span>Hacer una Reserva</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/perfil">
              <i className="fas fa-user" />
              <span>Mi Perfil</span>
            </NavLink>
          </li>
          <hr className="sidebar-divider d-none d-md-block"></hr>
        </ul>
        <div className="text-center d-none d-md-inline">
          <button  
            onClick={toggled} 
            className="btn rounded-circle border-0" 
            id="sidebarToggle" 
            type="button" />
        </div>
      </div>
    </nav>
  )
}

export default Leftside



