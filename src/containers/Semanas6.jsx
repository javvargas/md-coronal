import React from 'react'

import Header from '../components/Header'
import Botonera from './Botonera'
import Control from './Control'
import Clinica from './Clinica'

const Semanas6 = () => (
  <div className="flex">
    <div className="flex-grow"></div>
    <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
      <Header />

      <Control />
      <Clinica />

      <Botonera titulo1="Enviar" titulo2="Atrás" doble={true} />
    </div>
    <div className="flex-grow"></div>
  </div>
)

export default Semanas6