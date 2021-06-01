import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../routes/PrivateRoute'

import Home from '../containers/Home'
import Admin from '../containers/Admin'
import Editar from '../containers/Editar'
import Menu from '../containers/Menu'
import Ingreso from '../containers/Ingreso'
import Tac from '../containers/Tac'
import Cirugia from '../containers/Cirugia'
import Pop from '../containers/Pop'
import Semanas2 from '../containers/Semanas2'
import Semanas6 from '../containers/Semanas6'
import Meses6 from '../containers/Meses6'
import NotFound from '../containers/NotFound'

const App = () => {

  const [global, setGlobal] = useState({identificacion: '', responsable: '', token: ''})

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home global={global} setGlobal={setGlobal} />
        </Route>
        <PrivateRoute exact path="/admin" global={global}>
          <Admin global={global} />
        </PrivateRoute>
        <PrivateRoute exact path="/editar" global={global}>
          <Editar global={global} />
        </PrivateRoute>
        <PrivateRoute exact path="/editar/:id" global={global}>
          <Editar global={global} />
        </PrivateRoute>
        <PrivateRoute exact path="/menu" global={global} >
          <Menu global={global} setGlobal={setGlobal} />
        </PrivateRoute>
        <PrivateRoute exact path="/ingreso" global={global}>
          <Ingreso global={global} />
        </PrivateRoute>
        <PrivateRoute exact path="/tac" global={global}>
          <Tac global={global} />
        </PrivateRoute>
        <PrivateRoute exact path="/cirugia" global={global}>
          <Cirugia global={global} />
        </PrivateRoute>
        <PrivateRoute exact path="/pop" global={global}>
          <Pop global={global} />
        </PrivateRoute>
        <PrivateRoute exact path="/semanas2" global={global}>
          <Semanas2 global={global} />
        </PrivateRoute>
        <PrivateRoute exact path="/semanas6" global={global}>
          <Semanas6 global={global} />
        </PrivateRoute>
        <PrivateRoute exact path="/meses6" global={global}>
          <Meses6 global={global} />
        </PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App