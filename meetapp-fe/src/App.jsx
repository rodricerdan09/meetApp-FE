import React from 'react';  
import './App.css';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
//HOOKS
import { useState } from 'react';
import {useAuth0} from '@auth0/auth0-react';

// import layout
import Leftside from './Layout/Leftside';  
import Header from './Layout/Header'  
import Footer from './Layout/Footer'
import ScrollToTop from './Layout/ScrollToTop';

//import components
import Inicio from './Components/Inicio';
import Perfil from './Components/Perfil';
import Reservar from './Components/Reservar';
import NotFound from './Components/NotFound';

//import Login from "./Login";  
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() { 
  const { isAuthenticated, isLoading } = useAuth0(); 

  const [toggled, setToggled] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const slidebarToggled =()=>{
    if (isToggled) {
      setToggled("");
      setIsToggled(false);
    } else {
      setToggled("toggled");
      setIsToggled(true);
    } 
  } 
  if (isLoading) {
    return( 
      <div class="text-center">
        <div className="spinner-border text-primary" role="status">
         
        </div>
        <strong>Cargando página...</strong>
      </div>
    )
  }
 
  return (  
    <div className="App">  
      <Router >
        <div id="wrapper">  
          <Leftside toggled={toggled} slidebarToggled={slidebarToggled}/>  
          <div id="content-wrapper" className="d-flex flex-column">  
            <div id="content">  
              <Header slidebarToggled={slidebarToggled} />  
              <Switch>
                <Route 
                  exact path='/' 
                  component={Inicio}>
                </Route> 
                <Route 
                  exact path='/perfil' 
                  component={Perfil}>
                </Route>
                <Route 
                  exact path='/reservar' 
                  component={Reservar}>
                </Route>
                <Route
                  path="*" 
                  component={NotFound}>
                </Route> 
                   
              </Switch> 
            </div>  
            <Footer /> 
          </div>
           
        </div>  
      </Router> 
      <ScrollToTop/> 
    </div> 
  );  
}  
  
export default App;  