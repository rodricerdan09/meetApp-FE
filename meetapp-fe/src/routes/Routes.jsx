import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from "../auth/ProtectedRoute.jsx";

//views
import Home from '../views/Home';
import MisReservas from '../views/MisReservas';
import Perfil from '../views/Perfil';
import Reservar from '../views/reservar/Reservar';
import NotFound from '../views/NotFound';
import Mesas from '../views/reservar/Mesas.jsx';
import ExternalApi from '../views/ExternalApi.jsx';

const Routes = () => {
    return (
      <Switch>
        <Route
          exact
          path="/external"
          component={ExternalApi}
        />
        <ProtectedRoute
          exact
          path="/mis-reservas"
          component={MisReservas}
        />
        <ProtectedRoute
          exact
          path="/perfil"
          component={Perfil}
        />
       <ProtectedRoute
          exact
          path="/reservar/mesas"
          component={Mesas}
        /> 
        <ProtectedRoute
          exact
          path="/reservar"
          component={Reservar}
        />
          
        <Route exact
          path="/" 
          component={Home}
        />
        <Route 
          path="*" 
          component={NotFound}
        />
      </Switch>
    );
}

export default Routes;
