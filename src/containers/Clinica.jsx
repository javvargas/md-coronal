import React from 'react'

import Titulo from '../components/Titulo'
import Radio from '../components/Radio'
import Nivel from '../components/Nivel'

const Semanas2 = () => {
  const datosTug = [{id: 1, item: '≤ 10 seconds = normal'}, {id: 2, item: '≤ 20 seconds = good mobility, can go out alone, mobile without gait aid'}, {id: 3, item: '≤ 30 seconds = problems, cannot go outside alone, requires gait aid'}]
  const datosHerida = [{id: 1, item: 'Pus'}, {id: 2, item: 'Sangrado'}, {id: 3, item: 'Hematoma'}, {id: 4, item: 'Dehiscencia'}, {id: 4, item: 'Sin complicaciones'}, {id: 4, item: 'Otro:'}]

  return (
    <div>
      <Titulo titulo="Clínica" />
      <Radio valores={datosTug} label="TUG" grupo="tug" primero />
      <Radio valores={datosHerida} label="¿Herida o alguna otra complicación?" grupo="herida" />
      <Nivel label="VAS" />
    </div>
  )
}

export default Semanas2