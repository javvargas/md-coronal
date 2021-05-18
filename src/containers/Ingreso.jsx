import React from 'react'

import Header from '../components/Header'
import Titulo from '../components/Titulo'
import Radio from '../components/Radio'
import Botonera from './Botonera'
import Campo from '../components/Campo'
import Selector from '../components/Selector'
import Eq5d from './Eq5d'

const Ingreso = () => {
  const datosGenero = [{id: 1, item: 'Mujer'}, {id: 2, item: 'Hombre'}]
  const datosEstabilidad = [{id: 1, item: 'Estable'}, {id: 2, item: 'Inestable'}, {id: 3, item: 'Severamente Inestable'}]
  const datosSospecha = [{id: 1, item: 'Si'}, {id: 2, item: 'No'}, {id: 3, item: 'Posiblemente'}]
  const datosIdentifica = [{id: 1, item: 'Si'}, {id: 2, item: 'No'}, {id: 3, item: 'Otro:'}]
  const datosOlvide = [{id: 1, item: 'Si'}]

  return (
    <div className="flex ">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />
        <Titulo titulo="Ingreso"/>
        <Campo name="nombre" label="Nombre" primero={true} />
        <Campo name="edad" label="Edad"/>
        <Radio valores={datosGenero} label="Genero" grupo="genero"/>
        <Selector label="Clasificación AO inicial"/>
        <Radio valores={datosEstabilidad} label="Estabilidad según clasificación AO" grupo="estabilidad"/>
        <Radio valores={datosSospecha} label="¿Sospecha de trazo coronal?" grupo="sospecha"/>
        <Radio valores={datosIdentifica} label="¿Se identifica trazo coronal en RX simple AP y lateral?" grupo="identifica"/>
        <Radio valores={datosOlvide} label="No olvide realizar la aleatorización del paciente para toma de TAC" grupo="olvide"/>

        <Eq5d />

        <Botonera titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Ingreso