import React from 'react'

import Titulo from '../components/Titulo'
import Radio from '../components/Radio'
import Nivel from '../components/Nivel'

const Semanas2 = ({ acumulador, validadorTug, validadorHerida, datos }) => {
  const datosTug = [{id: 1, item: '≤ 10 seconds = normal'}, {id: 2, item: '≤ 20 seconds = good mobility, can go out alone, mobile without gait aid'}, {id: 3, item: '≤ 30 seconds = problems, cannot go outside alone, requires gait aid'}]
  const datosHerida = [{id: 1, item: 'Pus'}, {id: 2, item: 'Sangrado'}, {id: 3, item: 'Hematoma'}, {id: 4, item: 'Dehiscencia'}, {id: 4, item: 'Sin complicaciones'}, {id: 4, item: 'Otro:'}]

  return (
    <div>
      <Titulo titulo="Clínica" />
      <Radio valores={datosTug} label="TUG" grupo="tug" primero acumulador={ acumulador } isInvalid={ validadorTug } />
      <Radio valores={datosHerida} label="¿Herida o alguna otra complicación?" grupo="herida" acumulador={ acumulador } isInvalid={ validadorHerida } datos={ datos } />
      <Nivel label="VAS" nombre='vas' acumulador={ acumulador } />
    </div>
  )
}

export default Semanas2