import React from 'react'

import Titulo from '../components/Titulo'
import Radio from '../components/Radio'
import Campo from '../components/Campo'

const Radiografia = () => {
  const datosLateral = [{id: 1, item: 'Anatómica'}, {id: 2, item: 'Aceptable'}, {id: 3, item: 'Inaceptable'}]
  const datosPosicion = [{id: 1, item: 'Centro'}, {id: 2, item: 'Excéntrica'}]
  const datosSoporte = [{id: 1, item: 'Negativo'}, {id: 2, item: 'Anatómico'}, {id: 3, item: 'Positivo'}]

  return (
    <div>
        <Titulo titulo="Radiografías"/>
        <Radio valores={datosLateral} label="RX AP y lateral / Reducción" grupo="lateral" primero />
        <Radio valores={datosPosicion} label="RX / Posición tornillo cefalico" grupo="posicion" />
        <Campo label="RX / TAD" name="rx" />
        <Radio valores={datosSoporte} label="Soporte medial cortical" grupo="soporte" imagen />
    </div>
  )
}

export default Radiografia