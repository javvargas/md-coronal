import React from 'react'

import Header from '../components/Header'
import Titulo from '../components/Titulo'
import Botonera from './Botonera'
import Radio from '../components/Radio'
import Campo from '../components/Campo'
import Radiografia from './Radiografia'

const Pop = () => (
    <div className="flex ">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />
        <Radiografia />

        <Botonera titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )

export default Pop