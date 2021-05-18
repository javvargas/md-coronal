import React from 'react'

import Header from '../components/Header'
import Botonera from './Botonera'
import Control from './Control'
import Clinica from './Clinica'
import Eq5d from './Eq5d'

const Meses6 = () => (
  <div className="flex">
    <div className="flex-grow"></div>
    <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
      <Header />

      <Control />
      <Clinica />
      <Eq5d />

      <Botonera titulo1="Enviar" titulo2="Atrás" doble={true} />
    </div>
    <div className="flex-grow"></div>
  </div>
)

export default Meses6