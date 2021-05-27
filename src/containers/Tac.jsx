import React, { useState, useEffect } from 'react'
import { apiGuardar, cargando, confirmacion, error } from '../utils/utils'
import { useHistory } from 'react-router-dom'

import Header from '../components/Header'
import Titulo from '../components/Titulo'
import Botonera from './Botonera'
import Texto from '../components/Texto'
import Radio from '../components/Radio'
import Selector from '../components/Selector'

const Tac = () => {
  let history = useHistory();
  const textoTac = `Según el hallazgo en el tac clasifique el trazo coronal teniendo en cuenta  la clasificacion de cho. tenga en cuenta que la clasificación se divide en: \n\n1. Morfología Primaria: trazo de fractura que comienza en el centro del  macizo trocantéreo y sale a través de la cresta intertrocantérica.\n\n2. Morfología Secundaria: trazo de fractura que comienza en el macizo trocantéreo y sale a través del trocánter menor, sin comprometer la pared posteromedial. \n\n3. Morfología Terciaria: trazo de fractura que comienza en el margen anterior del macizo trocantéreo y sale a través de la cortical posteromedial del fémur.`
  const datosTac = [{id: 1, item: 'No'}, {id: 2, item: '#1 - Primaria'}, {id: 3, item: '#2 - Secundaria'}, {id: 4, item: '#3 - Terciaria'}, {id: 5, item: 'Otro y explique la caracterización del trazo que evidenció'}]

  const [selTac, setSelTac] = useState({ tac: '', tac_otro: '', clasificacion: '' })
  const [validador, setValidador] = useState([])
  const [botonActivo, setbotonActivo] = useState('')

  const actualizaValores = (nombre, valor) => {
    setSelTac({ ...selTac, [nombre] : valor }) 
  }
  
  useEffect(() => {
    (validador.length > 0) && recarga()
  }, [selTac])


  const recarga = () => {
    const propiedades = Object.keys(selTac)
    const resultados = Object.values(selTac)

    const validar = []
    resultados.forEach((e, i) => {
      (e === '') && validar.push(propiedades[i])
    })
    setValidador(validar)
    return validar
  }

  const enviarForm = () => {
    const validar = recarga()

    //quitar elemento del campo "otro"
    if (selTac.tac_otro === '' && selTac.tac.substring(0,4) !== 'Otro') {
      var index = validar.indexOf('tac_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
        
    // Esta vacio el array puede enviar la informacion a la API
    if (validar.length === 0) {
      setbotonActivo('disabled')
      cargando()
      apiGuardar('/v1/tacs', selTac, 2, '80502802')
      .then(resultado => {
        if (resultado === 'OK') {
          confirmacion()
        } else {
          error(resultado)
        }
        history.push('/')
      })
    }
  }

  let validadorTac, validadorClasificacion = false

  validadorTac = (validador.includes('tac'))
  validadorClasificacion = (validador.includes('clasificacion'))

  if (selTac.tac.substring(0,4) === 'Otro') {
    validadorTac = selTac.tac_otro === ''
  } else {
    validadorTac = validador.includes('tac')
  }

  return (
    <div className="flex ">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />
        <Titulo titulo="TAC"/>
        <Texto texto={textoTac} primero />
        <Radio valores={datosTac} label="Clasificación trazo coronal en TAC" grupo="tac" imagen acumulador={ actualizaValores } isInvalid={validadorTac} datos={selTac.tac_otro} />
        <Selector name="clasificacion" label="Clasificación AO posterior" acumulador={ actualizaValores } isInvalid={validadorClasificacion} />

        <Botonera enviarInfo={ enviarForm } botonActivo={ botonActivo } titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Tac