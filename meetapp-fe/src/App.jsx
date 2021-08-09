
//MODULES
import React from 'react';  
import './App.css';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
//HOOKS
import { useState } from 'react';
import {useAuth0} from '@auth0/auth0-react';

//layout
import Leftside from './layout/Leftside';  
import Header from './layout/Header'  
import Footer from './layout/Footer'
import ScrollToTop from './layout/ScrollToTop';
import Loading from './layout/Loading';

//ROUTES
import Routes from './routes/Routes.jsx';

function App() { 
  const {isLoading} = useAuth0(); 

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
      <Loading/>
    )
  }
  return (  
    <div className="App">  
      
      <div id="wrapper">  
        <Leftside toggled={toggled} slidebarToggled={slidebarToggled}/>  
        <div id="content-wrapper" className="d-flex flex-column">  
          <div id="content">  
            <Header slidebarToggled={slidebarToggled} />  
            <Routes/>
          </div>  
          <Footer /> 
        </div>
          
      </div>  
    
      <ScrollToTop/> 
    </div> 
  );  
}  
  
export default App;  