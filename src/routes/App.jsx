import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Menu from '../containers/Menu'
import Ingreso from '../containers/Ingreso'
import Tac from '../containers/Tac'
import Cirugia from '../containers/Cirugia'
import Pop from '../containers/Pop'
import Semanas2 from '../containers/Semanas2'
import Semanas6 from '../containers/Semanas6'
import Meses6 from '../containers/Meses6'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/ingreso" component={Ingreso} />
      <Route exact path="/tac" component={Tac} />
      <Route exact path="/cirugia" component={Cirugia} />
      <Route exact path="/pop" component={Pop} />
      <Route exact path="/semanas2" component={Semanas2} />
      <Route exact path="/semanas6" component={Semanas6} />
      <Route exact path="/meses6" component={Meses6} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App