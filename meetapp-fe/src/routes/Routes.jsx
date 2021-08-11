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

const Routes = () => {
    return (
      <Switch>
        <ProtectedRoute
          exact
          path="/mis-reservas"
          component={MisReservas}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/perfil"
          component={Perfil}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/reservar/mesas"
          component={Mesas}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/reservar"
          component={Reservar}
        ></ProtectedRoute>
        <Route path="/" component={Home}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    );
}

export default Routes;
