import React from 'react'

import Header from '../components/Header'
import Titulo from '../components/Titulo'
import Botonera from './Botonera'
import Texto from '../components/Texto'
import Radio from '../components/Radio'
import Selector from '../components/Selector'

const Tac = () => {
  const textoTac = `Según el hallazgo en el tac clasifique el trazo coronal teniendo en cuenta  la clasificacion de cho. tenga en cuenta que la clasificación se divide en: \n\n1. Morfología Primaria: trazo de fractura que comienza en el centro del  macizo trocantéreo y sale a través de la cresta intertrocantérica.\n\n2. Morfología Secundaria: trazo de fractura que comienza en el macizo trocantéreo y sale a través del trocánter menor, sin comprometer la pared posteromedial. \n\n3. Morfología Terciaria: trazo de fractura que comienza en el margen anterior del macizo trocantéreo y sale a través de la cortical posteromedial del fémur.`
  const datosTac = [{id: 1, item: 'No'}, {id: 2, item: '#1 - Primaria'}, {id: 3, item: '#2 - Secundaria'}, {id: 4, item: '#3 - Terciaria'}, {id: 5, item: 'Otro y explique la caracterización del trazo que evidenció'}]

  return (
    <div className="flex ">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />
        <Titulo titulo="TAC"/>
        <Texto texto={textoTac} primero />
        <Radio valores={datosTac} label="Clasificación trazo coronal en TAC" grupo="tac" imagen />
        <Selector label="Clasificación AO posterior" />

        <Botonera titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Tac