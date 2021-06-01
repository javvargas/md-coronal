import React from 'react'

import Titulo from '../components/Titulo'
import Radio from '../components/Radio'

const Control = ({ acumulador, validadorReduccion, validadorPosicion, validadorPerdida, datos }) => {
  const datosReduccion = [{id: 1, item: 'Anatómica'}, {id: 2, item: 'Aceptable'}, {id: 3, item: 'Inaceptable'}]
  const datosPosicion = [{id: 1, item: 'Centro'}, {id: 2, item: 'Excéntrica'}]
  const datosPerdida = [{id: 1, item: 'No'}, {id: 2, item: 'Si, describa'}]

  return (
    <div>
        <Titulo titulo="Radiografías Control"/>
        <Radio valores={datosReduccion} label="RX / Reducción" grupo="reduccion" primero acumulador={ acumulador } isInvalid={ validadorReduccion } />
        <Radio valores={datosPosicion} label="RX / Posición tornillo cefalico" grupo="posicion" acumulador={ acumulador } isInvalid={ validadorPosicion } />
        <Radio valores={datosPerdida} label="Perdida de reducción" grupo="perdida" acumulador={ acumulador } isInvalid={ validadorPerdida } datos={ datos } />
    </div>
  )
}

export default Control