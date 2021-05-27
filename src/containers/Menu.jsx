import React, { useState } from 'react'

import Header from '../components/Header'
import Bienvenida from '../components/Bienvenida'
import Titulo from '../components/Titulo'
import Radio from '../components/Radio'
import Botonera from './Botonera'

const Menu = () => {
  const [ubicacion, setUbicacion] = useState('menu')

  const valores = [{id: 'ingreso', item: 'Ingreso'}, {id: 'tac', item: 'TAC'}, {id: 'cirugia', item: 'Datos de cirugia'}, {id: 'pop', item: 'Radiografía POP inmediato'}, {id: 'semanas2', item: '2 Semanas'}, {id: 'semanas6', item: '6 Semanas'}, {id: 'meses6', item: '6 Meses'}]

  const handleSeleccion = seleccion => {
    setUbicacion(seleccion)
  }

  return (
    <div className="flex">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />
        <Bienvenida />
        <Titulo titulo="Menú"/>
        <Radio seleccion={ handleSeleccion } valores={valores} label="¿Qué desea ingresar?" grupo="menu" primero/>
        <Botonera titulo1="Siguiente" ubicacion={ubicacion} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Menu