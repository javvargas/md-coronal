import React from 'react'

import Titulo from '../components/Titulo'
import Radio from '../components/Radio'
import Campo from '../components/Campo'

const Radiografia = (props) => {
  const datosLateral = [{id: 1, item: 'Anatómica'}, {id: 2, item: 'Aceptable'}, {id: 3, item: 'Inaceptable'}]
  const datosPosicion = [{id: 1, item: 'Centro'}, {id: 2, item: 'Excéntrica'}]
  const datosSoporte = [{id: 1, item: 'Negativo'}, {id: 2, item: 'Anatómico'}, {id: 3, item: 'Positivo'}]

  let validadorLateral, validadorPosicion, validadorRx, validadorSoporte = false

  validadorLateral = (props.validador.includes('lateral'))
  validadorPosicion = (props.validador.includes('posicion'))
  validadorRx = (props.validador.includes('rx'))
  validadorSoporte = (props.validador.includes('soporte'))

  return (
    <div>
        <Titulo titulo="Radiografías"/>
        <Radio acumulador={props.acumulador} valores={datosLateral} isInvalid={validadorLateral} label="RX AP y lateral / Reducción" grupo="lateral" primero />
        <Radio acumulador={props.acumulador} valores={datosPosicion} isInvalid={validadorPosicion} label="RX / Posición tornillo cefalico" grupo="posicion" />
        <Campo acumulador={props.acumulador} isInvalid={validadorRx} tipo="number" label="RX / TAD" name="rx" />
        <Radio acumulador={props.acumulador} valores={datosSoporte} isInvalid={validadorSoporte} label="Soporte medial cortical" grupo="soporte" imagen />
    </div>
  )
}

export default Radiografia