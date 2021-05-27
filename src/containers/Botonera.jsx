import React from 'react'

import Boton from '../components/Boton'

const Botonera = (props) => {
  
  return (

    <div className="flex justify-between md:justify-start w-11/12 md:w-full mx-auto border mb-4">
      <div className="mr-6">
        <Boton enviarInfo={ props.enviarInfo } botonActivo={ props.botonActivo } valor={props.titulo1} ubicacion={props.ubicacion} />
      </div>
      {props.doble &&
        <div>
          <Boton valor={props.titulo2} ubicacion={props.ubicacion} />
        </div>
      }
    </div>

  )
}

export default Botonera