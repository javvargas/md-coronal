import React from 'react'

import Titulo from '../components/Titulo'
import Radio from '../components/Radio'
import Campo from '../components/Campo'

const Control = () => {
  const datosReduccion = [{id: 1, item: 'Anatómica'}, {id: 2, item: 'Aceptable'}, {id: 3, item: 'Inaceptable'}]
  const datosPosicion = [{id: 1, item: 'Centro'}, {id: 2, item: 'Excéntrica'}]
  const datosPerdida = [{id: 1, item: 'Si'}, {id: 2, item: 'No'}]

  return (
    <div>
        <Titulo titulo="Radiografías Control"/>
        <Radio valores={datosReduccion} label="RX / Reducción" grupo="reduccion" primero />
        <Radio valores={datosPosicion} label="RX / Posición tornillo cefalico" grupo="posicion" />
        <Radio valores={datosPerdida} label="Perdida de reducción" grupo="perdida" />
        <Campo label="Describa perdida de la reducción" name="describa" />
    </div>
  )
}

export default Control