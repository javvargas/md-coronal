import React, { useState, useEffect } from 'react'
import { apiUsuarios } from '../utils/utils'

import Header from '../components/Header'
import Titulo from '../components/Titulo'
import Descarga from '../components/Descarga'
import Usuarios from '../components/Usuarios'
import Botonera from './Botonera'
import { Fragment } from 'react'

const Admin = ({global}) => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    apiUsuarios(undefined, global.token)
    .then(resultado => {
      setUsuarios(resultado)
    })
  }, [])

  return (
    <div className="flex">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />

        {global.responsable.admin === 1 &&
          <Fragment>
            <Titulo titulo="Descargar Reporte" global={global} />
            <Descarga primero />
          </Fragment>
        }

        <Titulo titulo="Administrador de usuarios" global={global} creaUsuario />

        <Usuarios usuarios={usuarios} global={global} primero />

        <Botonera titulo1="Atras" titulo2="Salir" ubicacion='menu' doble />

      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Admin