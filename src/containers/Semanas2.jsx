import React, { useState, useEffect } from 'react'
import { apiGuardar, cargando, confirmacion, error } from '../utils/utils'
import { useHistory } from 'react-router-dom'

import Header from '../components/Header'
import Botonera from './Botonera'
import Clinica from './Clinica'

const Semanas2 = () => {
  let history = useHistory();
  const [selSemanas2, setSelSemanas2] = useState({ tug: '', herida: '', herida_otro: '', vas: 0 })
  const [validador, setValidador] = useState([])
  const [botonActivo, setbotonActivo] = useState('')

  const actualizaValores = (nombre, valor) => {
    setSelSemanas2({ ...selSemanas2, [nombre] : valor }) 
  }
  
  useEffect(() => {
    (validador.length > 0) && recarga()
  }, [selSemanas2])


  const recarga = () => {
    const propiedades = Object.keys(selSemanas2)
    const resultados = Object.values(selSemanas2)

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
    if (selSemanas2.herida_otro === '' && selSemanas2.herida.substring(0,4) !== 'Otro') {
      var index = validar.indexOf('herida_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
    
    // Esta vacio el array puede enviar la informacion a la API
    if (validar.length === 0) {
      setbotonActivo('disabled')
      cargando()
      apiGuardar('/v1/semanas2s', selSemanas2, 2, '80502802')
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

  let validadorTug, validadorHerida = false

  validadorTug = (validador.includes('tug'))
  validadorHerida = (validador.includes('herida'))

  if (selSemanas2.herida.substring(0,4) === 'Otro') {
    validadorHerida = selSemanas2.herida_otro === ''
  } else {
    validadorHerida = validador.includes('herida')
  }
  
  return (
    <div className="flex">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />

        <Clinica acumulador={ actualizaValores } validadorTug={validadorTug} validadorHerida={validadorHerida} datos={selSemanas2.herida_otro} />

        <Botonera enviarInfo={ enviarForm } botonActivo={ botonActivo } titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Semanas2