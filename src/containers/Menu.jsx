import React, { useState, Fragment } from 'react'
import { apiPaciente, cargando, cerrarSwal } from '../utils/utils'

import Header from '../components/Header'
import Bienvenida from '../components/Bienvenida'
import Titulo from '../components/Titulo'
import Texto from '../components/Texto'
import Busqueda from '../components/Busqueda'
import Botonera from './Botonera'

const Menu = ({global, setGlobal}) => {
  const [ubicacion, setUbicacion] = useState({ id: '/', item: ''})
  const [selPaciente, setSelPaciente] = useState({ nombre: '', identificacion: '', menu: '' })
  const [selBuscar, setSelBuscar] = useState('')

  const handelBuscar = () => {
    if (selBuscar !== '') {
      cargando()
      apiPaciente(selBuscar, global.token)
      .then(resultado => {
        if (resultado.paciente) { //si encuentra paciente
          setSelPaciente({ 
            ...selPaciente, nombre: resultado.paciente.nombre, identificacion: resultado.paciente.identificacion, menu: resultado.menu.id
          })
          setUbicacion({ ...ubicacion, id:resultado.menu.id, item:resultado.menu.item })
          setGlobal({ ...global, identificacion: resultado.paciente.identificacion })
        } else {
          setSelPaciente({ ...selPaciente, nombre: 'Nuevo Paciente', identificacion: selBuscar, menu: 'ingreso' })
          setUbicacion({ ...ubicacion, id: 'ingreso', item: 'Ingreso' })
          setGlobal({ ...global, identificacion: selBuscar })
        }
        cerrarSwal()
      })
    }
  }  

  return (
    <div className="flex">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />
        <Bienvenida genero={global.responsable.genero} especialista={global.responsable.nombre} />

        <Busqueda buscar={ handelBuscar } datobusca={ setSelBuscar } nombrePaciente={ selPaciente.nombre } />

        {selPaciente.identificacion !== '' &&
          <Fragment>
            <Titulo titulo="Al paciente le corresponde:"/>
            <Texto texto={ubicacion.item} clases='font-bold' primero/>
          </Fragment>
        }

        <Botonera titulo1="Siguiente" titulo2="Salir" ubicacion={ubicacion.id} doble />

      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Menu