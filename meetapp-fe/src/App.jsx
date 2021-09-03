
//MODULES
import React from 'react';  
import './App.css';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
//HOOKS
import {useAuth0} from '@auth0/auth0-react';
import {useRef } from 'react';
//layout
import Leftside from './layout/Leftside';  
import Header from './layout/Header'  
import Footer from './layout/Footer'
import ScrollToTop from './layout/ScrollToTop';
import Loading from './layout/Loading';

//ROUTES
import Routes from './routes/Routes.jsx';

function App() { 
  let toggledRef = useRef();
  const toggled = () => toggledRef.current();

  const {isLoading} = useAuth0(); 
  if (isLoading) {
    return( 
      <Loading/>
    )
  }
  console.log("me vuelvo a render")
  return (  
    <div className="App">  
      
      <div id="wrapper">  
        <Leftside toggledRef={toggledRef}/>  
        <div id="content-wrapper" className="d-flex flex-column">  
          <div id="content">  
            <Header toggled={toggled}/>  
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